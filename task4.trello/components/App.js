import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <div style={styles.listsConteiner}>
          {lists.map(list => (
            <List
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <ActionButton list />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

const styles = {
  listsConteiner: {
    display: "flex",
    flexDirection: "row"
  }
};

export default connect(mapStateToProps)(App);