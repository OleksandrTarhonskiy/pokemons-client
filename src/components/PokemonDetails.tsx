import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Col, Badge, ProgressBar, Row } from 'react-bootstrap';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { fetchPokemon } from 'store/Pokemon/actions';
import Error from './Error';
import Loading from './Loading';

interface IRouterProps {
  name: string;
}

type UserPageProps = RouteComponentProps<IRouterProps>

const PokemonDetails: React.FC<UserPageProps> = ({ match }) => {
  const { loading, error, data } = useTypedSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(match.params.name));
  }, [dispatch, match.params.name]);

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <Row>
      <Col xs="12" md="6">
        <div className="d-flex justify-content-center">
          <img src={data?.sprites?.other?.dream_world?.front_default} alt="avatar" />
        </div>
      </Col>
      <Col xs="12" md="6">
        <div className="d-flex align-items-center">
          <img src={data?.sprites?.front_default} alt="icon" />
          <h2>{data.name}</h2>
        </div>
        <h3>Moves:</h3>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data?.moves?.map(({ move }: any) =>
            <Badge 
              bg="warning" 
              text="dark" 
              key={move?.name}
              className="m-1"
            >
              {move?.name}
            </Badge>
          )
        }
        <h3>Stats:</h3>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data?.stats?.map((s: any) => 
            <ProgressBar 
              key={s.stat.name}
              className="w-100 mt-3 mb-3" 
              now={s.base_stat}
              striped 
              variant="success"
              label={`${s?.stat?.name} - ${s.base_stat}`}
            />
          )
        }
      </Col>
    </Row>
  );
};

export default PokemonDetails;