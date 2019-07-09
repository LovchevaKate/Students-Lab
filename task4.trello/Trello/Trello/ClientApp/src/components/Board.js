import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextArea from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Task from "./Task";
import NavBar from "./NavBar";

let userId = localStorage.getItem("userId");
const token = `Bearer ${localStorage.getItem("token")}`;
const url = `https://localhost:44342/api/user/${userId}/ListAPI`;

class Board extends Component {
  state = {
    list: [],
    title: ""
  };

  handleInputChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  componentDidMount() {
    axios
      .get(url, {
        headers: {
          Authorization: token
        }
      })
      .then(list => {
        this.setState({
          list: list.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  createList = () => {
    try {
      axios
        .post(
          url,
          {
            userId: userId,
            title: this.state.title
          },
          {
            headers: {
              Authorization: token
            }
          }
        )
        .then(list => {
          this.setState({
            list: [...this.state.list, list.data]
          });
          this.setState({
            title: ""
          });
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
      axios
        .delete(`${url}/${id}`, {
          headers: {
            Authorization: token
          }
        })
        .then(list => {
          this.setState({
            list: list.data
          });
        })
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
        <NavBar />
        <div style={styles.boardConteiner}>
          {this.state.list.map(item => (
            <Card style={styles.cardConteiner} id={item.id}>
              <CardContent>
                {item.title}
                <Task idcard={item.id} />
              </CardContent>

              <Button
                onClick={() => this.deleteList(item.id)}
                style={styles.buttonDelete}
              >
                Delete Card
              </Button>
            </Card>
          ))}
        </div>

        <div style={styles.boardConteiner}>
          <Card style={styles.cardConteiner}>
            <TextArea
              name="title"
              autoFocus
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Enter list title"
              style={styles.textArea}
            />
            <Button onClick={this.createList} style={styles.buttonCreate}>
              Create new Card
            </Button>
          </Card>
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
    margin: 10,
    height: "100%"
  },
  buttonCreate: {
    color: "white",
    backgroundColor: "#45D09E",
    margin: "10px"
  },
  buttonDelete: {
    color: "white",
    backgroundColor: "#E85668",
    margin: "15px"
  },
  textArea: {
    resize: "none",
    width: "100%",
    overflow: "hidden",
    outline: "none",
    border: "none",
    padding: "10px"
  }
};

export default Board;
