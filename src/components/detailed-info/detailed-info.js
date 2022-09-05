import { Component } from "react";
import { useParams } from "react-router-dom";
import "../card/card.styles.css";

/* //! Solution to get URL params for class components in react-router6 by Gina Cooper: https://stackoverflow.com/questions/64782949/how-to-pass-params-into-link-using-react-router-v6/70733535#70733535
 */
export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
class DetailedInfo extends Component {
  constructor() {
    super();
    this.state = {
      pokemonDetails: {},
    };
  }

  componentDidMount() {
    // coming from the withRouter function above the class
    const id = this.props.match.params.id;
    // getting the URL params for the API call on a specific Pokémon
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((pokeData) =>
        this.setState(() => {
          return { pokemonDetails: pokeData };
        })
      );
  }

  render() {
    console.log(this.state.pokemonDetails);
    const { abilities, height, name, sprites, weight } =
      this.state.pokemonDetails;

    return (
      <div className="card-container" style={{ flexDirection: "column" }}>
        {/* <h2>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h2>
        <img src={sprites.front_default} alt={name} /> */}
        <p>Abilities:</p>
        {/* <ul>
          {abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
        <p>Height: {height * 10}cm</p>
        <p>Weight: {weight / 10}kg </p> */}
      </div>
    );
  }
}

export default withRouter(DetailedInfo);
