import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextArea from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Task from "./Task";

class Board extends Component {
  state = {
    list: []
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    let userId = localStorage.getItem("userId");
    axios
      .get(`https://localhost:44342/api/user/${userId}/ListAPI`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
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
      let userId = localStorage.getItem("userId");
      axios
        .post(`https://localhost:44342/api/user/${userId}/ListAPI`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
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
        .delete(`https://localhost:44342/api/user/${userId}/ListAPI/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
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
        <div style={styles.boardConteiner}>
          {this.state.list.map(item => (
            <Card style={styles.cardConteiner} id={item.id}>
              <CardContent>
                {item.title}
                <Task idcard={item.id} />
              </CardContent>

              <Button
                onClick={() => this.deleteList(item.id)}
                style={{
                  color: "white",
                  backgroundColor: "#E85668",
                  margin: "15px"
                }}
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
              onClick={this.createList}
              style={{
                color: "white",
                backgroundColor: "#45D09E",
                margin: "10px"
              }}
            >
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
    margin: 10
  }
};

export default Board;
