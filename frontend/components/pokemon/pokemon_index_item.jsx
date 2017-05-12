import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let poke = this.props.pokemon;
    return (
      <li className="pokemon">
        <Link to={`/pokemon/${poke.id}`}>
          <span>{poke.id}</span>
          <img src={poke.image_url}></img>
          <span>{poke.name}</span>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
