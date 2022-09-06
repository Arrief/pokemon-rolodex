import { Component } from "react";
import { Link, useParams } from "react-router-dom";
import "../card/card.styles.css";
import "./detailed-info.styles.css";

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
      ApiLoaded: false,
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
          return { pokemonDetails: pokeData, ApiLoaded: true };
        })
      );
  }

  render() {
    console.log(this.state);
    const { abilities, height, id, name, sprites, weight } =
      this.state.pokemonDetails;

    return (
      <>
        <div className="card-container card-detail">
          {this.state.ApiLoaded ? (
            <div>
              <h1>
                {`#${id} ${
                  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
                }`}
              </h1>
              <img
                src={sprites.front_default}
                alt={name}
                className="poke-image"
              />
              <h3>Abilities:</h3>
              <ul>
                {abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
              <h3>Height:</h3>
              <p>{height * 10}cm</p>
              <h3>Weight:</h3>
              <p>{weight / 10}kg</p>
            </div>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
        <Link to="/" className="home-btn">
          ← Back to the Pokédex
        </Link>
      </>
    );
  }
}

export default withRouter(DetailedInfo);
