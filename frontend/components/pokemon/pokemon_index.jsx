import React from 'react';
import PokemonItem from './pokemon_items';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    let pokemon = this.props.pokemon.map((poke, idx) => (
      <li key={idx} className="pokemon">
        <ul>
          <li className="pokemon-image"><img src={poke.image_url}></img></li>
          <li><h3>{poke.name}</h3></li>
          <li>Type: {poke.poke_type}</li>
          <li>Attack: {poke.attack}</li>
          <li>Defense: {poke.defense}</li>
          <li>Moves: {poke.moves.join(", ")}</li>
        </ul>
        <PokemonItem items={poke.items}/>
      </li>
    ));
    return (
      <div className="pokemon-index">
        <ul>
          {pokemon}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
