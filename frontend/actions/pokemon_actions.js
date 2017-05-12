export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const ADD_POKEMON = 'ADD_POKEMON';
export const ADD_ERROR = 'ADD_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

import * as APIUtil from '../util/api_util';


export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const receivePokemon = (pokemonDetail) => ({
  type: RECEIVE_POKEMON,
  pokemonDetail
});

export const receiveNewPokemon = (pokemon) => ({
  type: ADD_POKEMON,
  pokemon
});

export const receivePokemonErrors = error => ({
  type: ADD_ERROR,
  error: error
});

export const requestPokemon = (pokemon) => (dispatch) => {
  return APIUtil.fetchPokemon(pokemon)
    .then(poke => dispatch(receivePokemon(poke)));
};

export const addPokemon = (pokemon) => (dispatch) => {
  return APIUtil.createPokemon(pokemon).then(
      (poke) => {
        dispatch(receiveNewPokemon(poke));
        return poke;
      }, (error) => {
        return dispatch(receivePokemonErrors(error.responseJSON));
      });
};

export const clearError = () => ({
  type: CLEAR_ERROR
});
