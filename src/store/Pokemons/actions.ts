import { Dispatch } from 'redux';

import { fetch } from '../index';
import { PokemonsAction } from 'types/pokemons';
import { ActionTypes } from 'types/common';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchPokemons = (offset: number | string) => async(dispatch: Dispatch<PokemonsAction>) => {
  try {
    dispatch({ type: ActionTypes.FETCH_POKEMONS_LOADING });
    const res = await fetch.get(`/pokemon?offset=${offset}&limit=24'`);
    dispatch({ type: ActionTypes.FETCH_POKEMONS_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: ActionTypes.FETCH_POKEMONS_ERROR, payload: (e as Error).message });
  }
};
