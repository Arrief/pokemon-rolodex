import { Component } from "react";
import { useParams } from "react-router-dom";
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
    console.log(this.state.pokemonDetails);
    const { abilities, height, name, sprites, weight } =
      this.state.pokemonDetails;

    return (
      <div className="card-container card-detail">
        {this.state.ApiLoaded ? (
          <div
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            {" "}
            <h1>
              {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
            </h1>
            <img src={sprites.front_default} alt={name} />
            <h3>Abilities:</h3>
            <ul>
              {abilities.map((ability, index) => (
                <li key={index} style={{ textAlign: "left" }}>
                  {ability.ability.name}
                </li>
              ))}
            </ul>
            <h3>Height: {height * 10}cm</h3>
            <h3>Weight: {weight / 10}kg </h3>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
  }
}

export default withRouter(DetailedInfo);
