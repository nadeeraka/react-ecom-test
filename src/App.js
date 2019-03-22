import React, { Component } from "react";
import Nav from "./components/layouts/nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1 className="h">Welcome to Califonia</h1>
      </div>
    );
  }
}

export default App;
