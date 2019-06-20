import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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

  componentDidMount() {
    try {
      console.log(localStorage.getItem("userId"));
      axios
        .post("https://localhost:44342/api/ListAPI", {
          userID: localStorage.getItem("userId")
        })
        .then(lists => {
          console.log(lists);
        })
        .catch(e => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { idList, title, user, card, isFetching, error } = this.state;
    // if (isFetching) return <div>...Loading</div>;

    if (error) return <div>{`Error: ${error.message}`}</div>;

    return (
      <div>
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
            <CardContent>
              <Typography gutterBottom />
            </CardContent>
          </Card>
        </div>
      </div>
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
