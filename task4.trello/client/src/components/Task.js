import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextArea from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import axios from "axios";

class Board extends Component {
  state = {
    text: "",
    card: []
  };

  //   handleInputChange = ({ target: { name, value } }) => {
  //     this.setState({
  //       [name]: value
  //     });
  //     console.log(name);
  //   };

  componentDidMount() {
    //let listId = localStorage.getItem("userId");
    axios
      .get(`https://localhost:44342/api/list/${this.state.idList}/CardAPI`)
      .then(card => {
        this.setState({
          card: card.data
        });

        console.log(this.state.card);
      })
      .catch(e => {
        console.log(e);
      });
  }

  // createCard = async e => {
  //   try {
  //     e.preventDefault();
  //     //   let userId = localStorage.getItem("userId");
  //     axios
  //       .post(`https://localhost:44342/api/list/${listId}/CardAPI`, {
  //         listId: listId,
  //         text: this.state.text
  //       })
  //       .then(card => {
  //         console.log(card);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  render() {
    return (
      <div>
        <div style={styles.boardConteiner}>
          {this.state.card.map(item => (
            <Card style={styles.cardConteiner}>
              <CardContent>{item.text}</CardContent>
            </Card>
          ))}
        </div>
        {/* <div style={styles.boardConteiner}>
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
                Create{" "}
              </Button>
            </Card>
          </form>
        </div> */}
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
