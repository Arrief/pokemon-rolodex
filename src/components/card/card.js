import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { monster, id, imageLink } = this.props;

    return (
      <div className="card-container" key={id}>
        <h2>
          {monster.name.charAt(0).toUpperCase() +
            monster.name.slice(1).toLowerCase()}
        </h2>
        <img src={imageLink + `${id + 1}.png`} alt={monster.name} />
      </div>
    );
  }
}

export default Card;
