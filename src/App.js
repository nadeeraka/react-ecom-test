import React, { Component } from "react";
import Nav from "./components/layouts/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="container">
            <h1 className="h">Welcome to Califonia</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
