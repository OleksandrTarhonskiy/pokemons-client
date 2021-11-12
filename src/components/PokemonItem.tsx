import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { IPokemonInList } from 'types/pokemons';
import pokeball from 'assets/images/pokeball.png';

interface IPokemonItemProps {
  pokemon: IPokemonInList
}

const PokemonItem: React.FC<IPokemonItemProps> = ({ pokemon }) => {
  const history = useHistory();

  return (
    <Col xs="12" md="4">
      <div 
        className="pokemon-card d-flex justify-content-center align-items-center m-2"
        onClick={() => history.push(`/pokemons/${pokemon.name}`)}
      >
        <img src={pokeball} alt="pokeball" />
        <h2>{pokemon.name}</h2>
      </div>
    </Col>
  );
};

export default PokemonItem;