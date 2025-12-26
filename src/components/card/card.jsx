import { Component } from "react";
import { Link } from "react-router-dom";
import pokeball from "../../assets/pokeball.png";
import "./card.styles.css";

class Card extends Component {
  // constructor is running under the hood even though we did not write it here
  render() {
    const { monster, id } = this.props;

    return (
      <Link to={`/${monster.name}`} className="poke-link">
        <div className="card-container" key={id}>
          <img src={pokeball} alt={monster.name} className="pokeball" />
          <h2>
            {monster.name.charAt(0).toUpperCase() +
              monster.name.slice(1).toLowerCase()}
          </h2>
        </div>
      </Link>
    );
  }
}

export default Card;
