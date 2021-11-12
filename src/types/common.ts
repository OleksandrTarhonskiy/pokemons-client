/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPokemonData {
  data: any,
  loading: boolean,
  error: null | string,
  next?: string
}

export enum ActionTypes {
  FETCH_POKEMONS_LOADING = 'FETCH_POKEMONS_LOADING',
  FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS',
  FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR',
  FETCH_POKEMON_LOADING = 'FETCH_POKEMON_LOADING',
  FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS',
  FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR',
}