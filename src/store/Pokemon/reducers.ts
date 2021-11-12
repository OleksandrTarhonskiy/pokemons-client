import { ActionTypes, IPokemonData } from 'types/common';
import { PokemonAction } from 'types/pokemon';

const initialState: IPokemonData = {
  data: {},
  loading: false,
  error: null,
};


export const pokemon = (state = initialState, action: PokemonAction): IPokemonData => {
  switch (action.type) {
  case ActionTypes.FETCH_POKEMON_LOADING:
    return {
      loading: true,
      data: {},
      error: null
    };

  case ActionTypes.FETCH_POKEMON_SUCCESS:
    return {
      loading: false,
      data: action.payload,
      error: null,
    };

  case ActionTypes.FETCH_POKEMON_ERROR:
    return {
      loading: false,
      data: {},
      error: action.payload
    };

  default:
    return state;
  }
};