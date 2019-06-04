import React from "react";
import Icon from "@material-ui/core/icon";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextArea from "react-textarea-autosize";

import { connect } from "react-redux";
import { addList } from "../actions";

class ActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ""
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handeleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      dispatch(addList(text));
    }

    return;
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card";

    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter list title"
      : "Enter a title for this card";

    const buttonTitle = list ? "Add list" : "Add card";

    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidth: 270,
            padding: "6px 8px 2px"
          }}
        >
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              overflow: "hidden",
              outline: "none",
              border: "none"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={this.handeleAddList}
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "#5aac44"
            }}
          >
            {buttonTitle}
          </Button>
          <Icon
            style={{
              marginLeft: 8,
              cursor: "pointer"
            }}
          >
            close
          </Icon>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 35,
    width: 270,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
};

export default connect()(ActionButton);
