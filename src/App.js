import { Component } from "react";
import "./App.css";

class App extends Component {
  // constructor method available on all class cmp, allows us to access local state
  constructor() {
    // super calls constructor methods of any parent classes we are extending (here: React.Component)
    super();
    // initializing our state is pretty much main purpose to use constructor in React
    this.state = {
      monsters: [],
      pokeImgs: [],
      searchField: "",
    };
    console.log("Flow step 1: constructor");
  }

  // similar to useEffect hook, perform API request when component is rendered for 1st time
  componentDidMount() {
    console.log("Flow step 3: componentDidMount");
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=30")
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          // updater fn to update state with option to pass state & props as arguments (not needed here!), if we want to update state based on previous values
          (state, props) => {
            return { monsters: data.results };
          },
          // callback fn triggered after updater fn finished, to check if state was updated
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log(
      "Flow step 2 & 4: render; runs again after state change in step 3"
    );
    const imgUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    // new array of Pokémon whose names include letters the user typed
    const filteredPokemon = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchField)
    );

    /*
    for (const monster of this.state.monsters) {
      fetch(monster.url)
        .then((response) => response.json())
        .then((data) =>
          this.setState(() => {
            return { pokeImgs: data.sprites.front_default };
          })
        );
    }
    */

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Pokémon"
          onChange={(e) => {
            const searchStr = e.target.value.toLocaleLowerCase();
            // update state with filtered array
            this.setState(() => {
              return { searchField: searchStr };
            });
          }}
        />
        {/* if no filter search was typed, filteredPokemon = state.monsters */}
        {filteredPokemon.map((monster, id) => (
          <div key={id}>
            <h3>{monster.name}</h3>
            <img src={imgUrl + `${id + 1}.png`} alt={monster.name} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
