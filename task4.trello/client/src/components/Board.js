import React, { Component } from "react";
import ActionButton from "./ActionButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Board extends Component {
  state = { data: {}, isFetching: true, error: null };

  componentDidMount() {
    fetch("https://localhost:44342/api/ListAPI")
      .then(response => response.json())
      .then(result => this.setState({ data: result, isFetching: false }))
      .catch(e => {
        console.log(e);
        this.setState({ data: {}, isFetching: false, error: e });
      });
  }

  render() {
    const { data, isFetching, error } = this.state;
    if (isFetching) return <div>...Loading</div>;

    if (error) return <div>{`Error: ${error.message}`}</div>;

    return (
      <div className="Board">
        <div style={styles.boardConteiner}>
          {data.map(list => (
            <Card style={styles.cardConteiner}>
              <CardContent>
                <Typography gutterBottom>{data.text}</Typography>
              </CardContent>
            </Card>
          ))}
          <ActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  boardConteiner: {
    display: "flex",
    flexDirection: "row"
  }
};

export default Board;
