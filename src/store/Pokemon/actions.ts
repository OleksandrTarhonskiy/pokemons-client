import { Dispatch } from 'redux';

import { fetch } from '../index';
import { PokemonAction } from 'types/pokemon';
import { ActionTypes } from 'types/common';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchPokemon = (name: string) => async(dispatch: Dispatch<PokemonAction>) => {
  try {
    dispatch({ type: ActionTypes.FETCH_POKEMON_LOADING });
    const res = await fetch.get(`/pokemon/${name}`);
    dispatch({ type: ActionTypes.FETCH_POKEMON_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: ActionTypes.FETCH_POKEMON_ERROR, payload: (e as Error).message });
  }
};

