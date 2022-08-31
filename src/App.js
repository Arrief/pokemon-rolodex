import { Component } from "react";
import "./App.css";

class App extends Component {
  // constructor method available on all class cmp, allows us to access local state
  constructor() {
    // super calls constructor methods of any parent classes we are extending (here: React.Component)
    super();

    this.state = {
      monsters: [],
    };
  }

  // similar to useEffect hook, perform API request when component is rendered for 1st time
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=30")
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          // updater fn to update state with option to pass state & props as arguments (not needed here!), if we want to update state based on previous values
          (state, props) => {
            return { monsters: data };
          },
          // callback fn triggered after updater fn finished, to check if state was updated
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
