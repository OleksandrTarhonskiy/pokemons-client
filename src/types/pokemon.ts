/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTypes } from './common';

interface IFetchPokemonLoadingAction {
  type: ActionTypes.FETCH_POKEMON_LOADING,
}

interface IFetchPokemonSuccessAction {
  type: ActionTypes.FETCH_POKEMON_SUCCESS,
  payload: any;
}

interface IFetchPokemonErrorAction {
  type: ActionTypes.FETCH_POKEMON_ERROR,
  payload: string;
}

export type PokemonAction = IFetchPokemonLoadingAction | IFetchPokemonSuccessAction | IFetchPokemonErrorAction;

export interface IPokemonDetails {
  name: string,
  url: string
}