import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextArea from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Task from "./Task";

class Board extends Component {
  state = {
    card: [],
    list: []
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
    console.log(name);
  };

  componentDidMount() {
    let userId = localStorage.getItem("userId");
    axios
      .get(`https://localhost:44342/api/user/${userId}/ListAPI`)
      .then(list => {
        this.setState({
          list: list.data
        });

        console.log(this.state.list);
      })
      .catch(e => {
        console.log(e);
      });
  }

  createList = async e => {
    try {
      e.preventDefault();
      let userId = localStorage.getItem("userId");
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(userId);
      axios
        .post(`https://localhost:44342/api/user/${userId}/ListAPI`, {
          userId: userId,
          title: this.state.title
        })
        .catch(e => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  deleteList = id => {
    try {
      let userId = localStorage.getItem("userId");
      axios
        .delete(`https://localhost:44342/api/user/${userId}/ListAPI/${id}`)
        .catch(e => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        <div style={styles.boardConteiner}>
          {this.state.list.map(item => (
            <Card style={styles.cardConteiner} id={item.id}>
              <CardContent>
                {item.title}
                <Task />
              </CardContent>
              <Button
                onClick={() => this.deleteList(item.id)}
                style={{
                  color: "white",
                  backgroundColor: "#5aac44",
                  margin: "10px"
                }}
              >
                Delete
              </Button>
            </Card>
          ))}
        </div>
        <div style={styles.boardConteiner}>
          <form onSubmit={this.createList}>
            <Card style={styles.cardConteiner}>
              <TextArea
                name="title"
                autoFocus
                onChange={this.handleInputChange}
                placeholder="Enter list title"
                style={{
                  resize: "none",
                  width: "100%",
                  overflow: "hidden",
                  outline: "none",
                  border: "none",
                  padding: "10px"
                }}
              />
              <Button
                type="submit"
                style={{
                  color: "white",
                  backgroundColor: "#5aac44",
                  margin: "10px"
                }}
              >
                Create
              </Button>
            </Card>
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  boardConteiner: {
    display: "flex",
    margin: 10
  },
  cardConteiner: {
    width: 200,
    borderRadius: 3,
    margin: 10
  }
};

export default Board;
