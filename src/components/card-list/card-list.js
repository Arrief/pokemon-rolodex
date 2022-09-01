import { Component } from "react";

class CardList extends Component {
  // constructor is running under the hood even though we did not write it here
  render() {
    const { monsters, imageLink } = this.props;

    return monsters.map((monster, id) => (
      <div key={id}>
        <h3>{monster.name}</h3>
        <img src={imageLink + `${id + 1}.png`} alt={monster.name} />
      </div>
    ));
  }
}

export default CardList;
