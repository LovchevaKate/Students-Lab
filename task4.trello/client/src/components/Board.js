import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextArea from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import axios from "axios";

class Board extends Component {
  state = {
    idList: 0,
    title: "",
    user: 0,
    card: [],
    isFetching: true,
    error: null
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    fetch("https://localhost:44342/api/ListAPI")
      .then(response => console.log(response))
      .catch(e => {
        console.log(e);
      });
  }

  createList = async e => {
    try {
      e.preventDefault();
      axios
        .post("https://localhost:44342/api/ListAPI", {
          user: localStorage.getItem("userId"),
          title: this.state.title
        })
        .then(list => {
          console.log(list);
          console.log("create");
        })
        .catch(e => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { idList, title, user, card, isFetching, error } = this.state;
    // if (isFetching) return <div>...Loading</div>;

    if (error) return <div>{`Error: ${error.message}`}</div>;

    return (
      <form onSubmit={this.createList}>
        <div style={styles.boardConteiner}>
          {this.state.card.map(item => (
            <Card style={styles.cardConteiner} key={item.id}>
              <CardContent>
                <Typography gutterBottom>{title}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <div style={styles.boardConteiner}>
          <Card style={styles.cardConteiner}>
            <TextArea
              autoFocus
              onChange={this.handleInputChange}
              placeholder="Enter list title"
            />
            <Button type="submit">Create </Button>
          </Card>
        </div>
      </form>
    );
  }
}

const styles = {
  boardConteiner: {
    display: "flex",
    flexDirection: "row"
  },
  cardConteiner: {
    width: 200,
    borderRadius: 3,
    margin: 10
  }
};

export default Board;
