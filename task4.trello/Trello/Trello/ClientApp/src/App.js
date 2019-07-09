import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <Router>
        <Route name="signin" exact path="/" component={SignIn} />
        <Route name="signup" path="/signup" component={SignUp} />
        <Route name="board" path="/board" component={Board} />
      </Router>
    );
  }
}

export default App;
