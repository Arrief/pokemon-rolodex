import { Component } from "react";
import Card from "../card/card";
import "./card-list.styles.css";

class CardList extends Component {
  // constructor is only for pagination, would be omitted here otherwise
  constructor() {
    super();

    this.monstersPerPage = 30;
    this.state = {
      currentPage: 1,
    };

    // functions to change pages, boolean check when called onClick will disable the respective button if it is the first/last page
    this.prevPage = () => this.setState(() => --this.state.currentPage);
    this.nextPage = () => this.setState(() => ++this.state.currentPage);
  }

  render() {
    const { monsters } = this.props;
    // pagination calculations
    const currentPage = this.state.currentPage;
    const totalPages = Math.ceil(monsters.length / this.monstersPerPage);
    const lastDisplayIndex = currentPage * this.monstersPerPage;
    const firstDisplayIndex = lastDisplayIndex - this.monstersPerPage;
    const currentlyVisible = monsters.slice(
      firstDisplayIndex,
      lastDisplayIndex
    );

    return (
      <>
        <div className="card-list">
          {currentlyVisible.map((monster, id) => (
            <Card monster={monster} id={id} />
          ))}
        </div>
        <div className="pages">
          <p>
            Page {currentPage} / {totalPages}
          </p>
          <button disabled={currentPage === 1} onClick={this.prevPage}>
            ← Back
          </button>
          <button disabled={currentPage === totalPages} onClick={this.nextPage}>
            Next →
          </button>
        </div>
      </>
    );
  }
}

export default CardList;
