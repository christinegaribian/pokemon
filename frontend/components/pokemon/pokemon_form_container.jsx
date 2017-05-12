import {connect} from 'react-redux';
import {addPokemon, clearError} from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapDispatchToProps = (dispatch) => ({
  addPokemon: (pokemon) => (dispatch(addPokemon(pokemon))),
  clearError: () => (dispatch(clearError()))
});

const mapStateToProps = (state) => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
