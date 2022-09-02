import { Component } from "react";
import CardList from "../components/card-list/card-list";
import SearchBox from "../components/search-box/search-box";

class Home extends Component {
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

  onSearch = (event) => {
    const searchStr = event.target.value.toLocaleLowerCase();
    // update state with filtered array
    this.setState(() => {
      return { searchField: searchStr };
    });
  };

  render() {
    console.log(
      "Flow step 2 & 4: render; runs again after state change in step 3"
    );

    // destructuring to make the code more readable instead of e.g. this.state.monsters
    const { monsters, searchField } = this.state;
    const { onSearch } = this;

    const imgUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    // new array of Pokémon whose names include letters the user typed
    const filteredPokemon = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div>
        <h1 className="app-title">Pokémon Rolodex</h1>
        <SearchBox onChangeHandler={onSearch} placeholder="Search Pokémon" />
        {/* if no filter search was typed, filteredPokemon = state.monsters */}
        <CardList monsters={filteredPokemon} imageLink={imgUrl} />
      </div>
    );
  }
}

export default Home;
