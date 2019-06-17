import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={Home} />
          <Route name="signin" exact path="/signin" component={SignIn} />
          <Route name="signup" exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
