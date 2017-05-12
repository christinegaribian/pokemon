import React from 'react';
import { withRouter } from 'react-router-dom';

const TYPES = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
];

class PokemonForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      image: '',
      type: '',
      attack: '',
      defense: '',
      move1: '',
      move2: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState( {[property]: e.target.value} );
  }

  handleSubmit(e){
    e.preventDefault();

    let newPokemon = {
      name: this.state.name,
      image_url: this.state.image,
      poke_type: this.state.type,
      attack: this.state.attack,
      defense: this.state.defense,
      moves: [this.state.move1, this.state.move2]
    };

    let form = this;

    this.props.addPokemon({pokemon: newPokemon})
      .then(newPoke => this.props.history.push(`pokemon/${newPoke.id}`))
      .then(() => (form.props.clearError()));
  }

  render(){
    let errors = this.props.error.map((err, idx) => (
      <li key={idx}>{err}</li>
    ));

    return(
      <div className="form">
        <h1>Create Pokemon!!</h1>
        <input onChange={this.update('name')} placeholder="Name" id="name"></input>
        <input onChange={this.update('image')} placeholder="Image URL" id="image"></input>

        <select onChange={this.update('type')} value={this.state.type}>
          <option value="" disabled>Select Type</option>
          {TYPES.map((type, idx) => (
            <option key={idx} value={type}>{type}</option>
          ))}
        </select>

        <input onChange={this.update('attack')} placeholder="Attack" id="attack"></input>
        <input onChange={this.update('defense')} placeholder="Defense" id="defense"></input>
        <input onChange={this.update('move1')} placeholder="Move 1" id="move1"></input>
        <input onChange={this.update('move2')} placeholder="Move 2" id="move2"></input>
        <button onClick={this.handleSubmit}>Submit!</button>
        <ul>
          {errors}
        </ul>
      </div>
    );
  }
}

export default withRouter(PokemonForm);
