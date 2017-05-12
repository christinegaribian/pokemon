import { combineReducers } from 'redux';
import { pokemonReducer, pokemonDetailReducer, errorReducer } from './pokemon_reducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonDetail: pokemonDetailReducer,
  error: errorReducer
});

export default rootReducer;
