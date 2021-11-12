import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IPokemonInList } from 'types/pokemons';
import PokemonItem from './PokemonItem';
import { fetchPokemons } from 'store/Pokemons/actions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import pokeball from 'assets/images/pokeball.png';
import Error from './Error';

const PokemonsList: React.FC = () => {
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(false);
  const { loading, error, data, next } = useTypedSelector((state) => state.pokemons);

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setHasMore(true);
    }
    setHasMore(false);
  };

  useEffect(() => {
    dispatch(fetchPokemons(0));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hasMore && next) {
      const urlSearchParams = new URLSearchParams(next.split('?')[1]);
      const params = Object.fromEntries(urlSearchParams.entries());
      dispatch(fetchPokemons(params.offset));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <Error message={error} />;

  return (
    <div className="list">
      {
        data.map((pokemon: IPokemonInList) => 
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        )
      }
      {loading ? 
        <div className="w-100 mt-5 d-flex justify-content-center">
          <img src={pokeball} className="spinner" alt="spinner" />
        </div> 
        : ''}
    </div>
  );
};

export default PokemonsList;