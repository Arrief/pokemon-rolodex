import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import DetailedInfo from "./components/detailed-info/detailed-info";
import Home from "./routes/home";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<DetailedInfo />} />
      </Routes>
    );
  }
}

export default App;
