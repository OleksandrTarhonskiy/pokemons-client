import { combineReducers } from 'redux';
import { pokemons } from './Pokemons/reducers';
import { pokemon } from './Pokemon/reducers';

export const rootReducer = combineReducers({
  pokemons,
  pokemon
});

export type RootState = ReturnType<typeof rootReducer>