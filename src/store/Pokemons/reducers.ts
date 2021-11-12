import { ActionTypes, IPokemonData } from 'types/common';
import { 
  PokemonsAction,  
} from 'types/pokemons';

const initialState: IPokemonData = {
  data: [],
  loading: false,
  error: null,
};


export const pokemons = (state = initialState, action: PokemonsAction): IPokemonData => {
  switch (action.type) {
  case ActionTypes.FETCH_POKEMONS_LOADING:
    return {
      loading: true,
      data: state.data,
      error: null
    };

  case ActionTypes.FETCH_POKEMONS_SUCCESS:
    return {
      loading: false,
      data: [...state.data, ...action.payload.results],
      error: null,
      next: action.payload.next
    };

  case ActionTypes.FETCH_POKEMONS_ERROR:
    return {
      loading: false,
      data: state.data,
      error: action.payload
    };

  default:
    return state;
  }
};