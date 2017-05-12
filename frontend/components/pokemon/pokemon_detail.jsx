import React from 'react';
import ItemDetailContainer from './item_detail_container';
import {Route, Link} from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps){
    let newId = newProps.match.params.pokemonId;
    if (this.props.match.params.pokemonId != newId) {
      this.props.requestPokemon(newProps.match.params.pokemonId);
    }
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  render(){
    let poke = this.props.pokemonDetail;
    if (!poke.id) {
      return(
        <div></div>
      );
    } else {
      let items = poke.items.map( (item, idx) => (
          <li key={idx} >
            <Link to={`/pokemon/${poke.id}/item/${item.id}`} >
              <img src={item.image_url}></img>
            </Link>
          </li>
        ));
      return(
        <div className="pokemon-detail">
          <ul>
            <li>
              <section className="pokemon-image">
                <img src={poke.image_url}></img>
              </section>
            </li>
            <li><h3>{poke.name}</h3></li>
            <li>Type: {poke.poke_type}</li>
            <li>Attack: {poke.attack}</li>
            <li>Defense: {poke.defense}</li>
            <li>Moves: {poke.moves.join(", ") }</li>
            <li className="item-box">
              <ul className="pokemon-item">
                {items}
              </ul>
              <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default PokemonDetail;
