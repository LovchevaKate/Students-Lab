import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import NavBar from "./NavBar";

const url = "https://localhost:44342/api/Identity/token";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "25%",
    alignItem: "center",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class SignIn extends Component {
  state = { login: "", password: "", LoggedIn: false };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      axios
        .post(url, {
          password: this.state.password,
          login: this.state.login
        })
        .then(users => {
          localStorage.setItem("loggedIn", "loggedIn");
          localStorage.setItem("login", users.data.login);
          localStorage.setItem("token", users.data.token);
          localStorage.setItem("userId", users.data.id);
          this.setState({ LoggedIn: true });
        })
        .then(() => {
          this.props.history.push("/board");
        })
        .catch(e => {
          alert(e);
        });
    } catch (e) {
      alert(e);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="100%">
        <NavBar />
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={this.handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
              onChange={this.onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={this.onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
export default withStyles(styles)(SignIn);
