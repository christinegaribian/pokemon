import React from 'react';

class PokemonItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let detail = this.props.itemDetail;

    return (
      <ul>
        <li>{detail.name}</li>
        <li>Happiness: {detail.happiness}</li>
        <li>Price: ${detail.price}</li>
      </ul>
    );
  }
}

export default PokemonItemDetail;
