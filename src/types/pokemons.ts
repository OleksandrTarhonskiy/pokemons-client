/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTypes } from './common';

interface IFetchPokemonsLoadingAction {
  type: ActionTypes.FETCH_POKEMONS_LOADING,
}

interface IFetchPokemonsSuccessAction {
  type: ActionTypes.FETCH_POKEMONS_SUCCESS,
  payload: any;
}

interface IFetchPokemonsErrorAction {
  type: ActionTypes.FETCH_POKEMONS_ERROR,
  payload: string;
}

export type PokemonsAction = IFetchPokemonsLoadingAction | IFetchPokemonsSuccessAction | IFetchPokemonsErrorAction;

export interface IPokemonInList {
  name: string,
  url: string
}