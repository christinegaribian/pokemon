import {connect} from 'react-redux';
import PokemonItemDetail from './item_detail';
import {selectPokemonItem} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  itemDetail: selectPokemonItem(state, ownProps.match.params.itemId)
});

export default connect(
  mapStateToProps
)(PokemonItemDetail);
