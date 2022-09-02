import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
}

export default App;
