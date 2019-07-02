import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class NavBar extends Component {
  state = {
    isOpen: false,
    LoggedIn: false
  };

  logOffClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("login");
    this.setState({
      LoggedIn: true
    });
  };

  // componentWillUpdate() {
  //   let loggedIn = localStorage.getItem("loggedIn");
  //   if (loggedIn === "loggedIn")
  //     this.setState({
  //       LoggedIn: true
  //     });
  //   console.log("navbar");
  //   console.log(this.state);
  // }

  renderloggedIn = () => {
    let loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "loggedIn")
      this.setState({
        LoggedIn: true
      });

    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        flexGrow: 1
      }
    }));

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" href="/" className={classes.title}>
              Home
            </Button>
            <Button
              color="inherit"
              onClick={this.logOffClick}
              href="/signin"
              className={classes.title}
            >
              Log out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  renderloggedOut = () => {
    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        flexGrow: 1
      }
    }));

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" href="/board" className={classes.title}>
              Board
            </Button>
            <Button color="inherit" href="/signin" className={classes.title}>
              Sign In
            </Button>
            <Button color="inherit" href="/signup" className={classes.title}>
              Sign Up
            </Button>
            <Button
              color="inherit"
              onClick={this.logOffClick}
              href="/signin"
              className={classes.title}
            >
              Log out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  render() {
    return this.state.LoggedIn ? this.renderloggedIn() : this.renderloggedOut();
  }
}

export default NavBar;
