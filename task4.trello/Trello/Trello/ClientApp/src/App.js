import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <Router>
        <Redirect from="/" to="/signin" />;
        <Route name="signin" exact path="/signin" component={SignIn} />
        <Route name="signup" exact path="/signup" component={SignUp} />
        <Route name="board" exact path="/board" component={Board} />
      </Router>
      // <Router>
      //   <div>
      //     <NavBar />
      //     <Route name="signin" exact path="/signin" component={SignIn} />
      //     <Route name="signup" exact path="/signup" component={SignUp} />
      //     <Route name="board" exact path="/board" component={Board} />
      //   </div>
      // </Router>
    );
  }
}

export default App;