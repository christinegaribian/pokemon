import { values } from 'lodash';

export const selectAllPokemon = (state) => (
  values(state.pokemon)
);

export const selectPokemonItem = (state, itemId) => (
  state.pokemonDetail.items.find( (item) => item.id == itemId)
);
