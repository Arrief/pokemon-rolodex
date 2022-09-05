import { Component } from "react";
import { useParams } from "react-router-dom";
import "../card/card.styles.css";

class DetailedInfo extends Component {
  constructor() {
    super();
    this.state = {
      pokemonDetails: [],
    };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${monsterName}`)
      .then((response) => response.json())
      .then((pokeData) =>
        this.setState(() => {
          return { pokemonDetails: pokeData };
        })
      );
  }

  render() {
    const { abilities, height, id, name, sprites, weight } = this.state;

    return (
      <div
        className="card-container"
        key={id}
        style={{ flexDirection: "column" }}
      >
        <h2>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h2>
        <img src={sprites.front_default} alt={name} />
        <p>Abilities:</p>
        <ul>
          {abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
        <p>Height: {height * 10}cm</p>
        <p>Weight: {weight / 10}kg </p>
      </div>
    );
  }
}

export default DetailedInfo;
