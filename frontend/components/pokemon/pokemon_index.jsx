import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    let pokemon = this.props.pokemon.map((poke, idx) => (
      <PokemonIndexItem pokemon={poke} key={idx} />
    ));
    return (
      <div className="pokemon-index">
        <div className="index">
          <ul>
            {pokemon}
          </ul>
        </div>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <Route exact path="/" component={PokemonFormContainer} />
      </div>
    );
  }
}

export default PokemonIndex;
