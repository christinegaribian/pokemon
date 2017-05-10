import React from 'react';

class PokemonItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.items.map( (item,idx) => (
        <li key={idx} >
          <img src={item.image_url}></img>
        </li>
      ));
    return (
      <ul className="pokemon-item">
        {items}
      </ul>
    );
  }
}

export default PokemonItem;
