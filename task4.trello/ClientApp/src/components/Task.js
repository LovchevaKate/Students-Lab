import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextArea from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import axios from "axios";

const url = "https://localhost:44342/api/list";

class Task extends Component {
  state = {
    card: [],
    text: ""
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  componentDidMount() {
    const url = "https://localhost:44342/api/list";
    const token = `Bearer ${localStorage.getItem("token")}`;
    axios
      .get(`${url}/${this.props.idcard}/CardAPI`, {
        headers: {
          Authorization: token
        },
        idList: this.props.idcard
      })
      .then(card => {
        this.setState({
          card: card.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  createCard = async e => {
    e.preventDefault();
    axios
      .post(
        `${url}/${this.props.idcard}/CardAPI`,
        {
          list: this.props.idcard,
          text: this.state.text
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(card => {
        this.setState({
          card: [...this.state.card, card.data]
        });
        this.setState({ text: "" });
      })
      .catch(e => {
        console.log(e);
      });
  };

  deleteTask = id => {
    axios
      .delete(`${url}/${this.props.idcard}/CardAPI/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(card => {
        this.setState({
          card: card.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.card.map(item => (
            <Card style={styles.cardConteiner} key={item.id}>
              <CardContent>{item.text}</CardContent>
              <Button
                onClick={() => this.deleteTask(item.id)}
                style={styles.buttonDelete}
              >
                Delete Task
              </Button>
            </Card>
          ))}
        </div>
        <div>
          <Card style={styles.newCardContainer}>
            <CardContent>
              <TextArea
                name="text"
                autoFocus
                value={this.state.text}
                onChange={this.handleInputChange}
                placeholder="Enter task text"
                style={styles.textArea}
              />
            </CardContent>
            <Button onClick={this.createCard} style={styles.buttonCreate}>
              Create Task
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}

const styles = {
  cardConteiner: {
    color: "#2F3640",
    backgroundColor: "#45D09E",
    marginTop: "25%",
    width: "100%"
  },
  newCardContainer: {
    marginTop: "25%"
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

export default Task;
