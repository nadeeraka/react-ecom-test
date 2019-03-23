import React, { Component } from "react";
import Nav from "./components/layouts/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/layouts/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="container">
            <Switch>
              <Route to="/" exact component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
