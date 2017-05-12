import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON, ADD_POKEMON, ADD_ERROR, CLEAR_ERROR } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case ADD_POKEMON:
      let newState = merge({}, state);
      newState[action.pokemon.id] = action.pokemon;
      return newState;
    default:
      return state;
  }
};

export const pokemonDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemonDetail;
    default:
      return state;
  }
};

export const errorReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ERROR:
      return action.error;
    case CLEAR_ERROR:
      return [];
    default:
      return state;
  }
};
