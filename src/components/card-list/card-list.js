import { Component } from "react";
import Card from "../card/card";
import "./card-list.styles.css";

class CardList extends Component {
  // constructor is running under the hood even though we did not write it here
  render() {
    const { monsters, imageLink } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster, id) => (
          <Card monster={monster} id={id} imageLink={imageLink} />
        ))}
      </div>
    );
  }
}

export default CardList;
