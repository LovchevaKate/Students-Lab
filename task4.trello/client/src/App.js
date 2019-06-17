import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Signin";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={Home} />
          <Route name="login" exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
