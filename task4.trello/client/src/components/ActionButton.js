// import React from "react";
// import Card from "@material-ui/core/Card";
// import Button from "@material-ui/core/Button";
// import TextArea from "react-textarea-autosize";

// import { connect } from "react-redux";
// import { addList, addCard } from "../actions";

// class ActionButton extends React.Component {
//   state = {
//     formOpen: false,
//     text: ""
//   };

//   handleInputChange = e => {
//     this.setState({
//       text: e.target.value
//     });
//   };

//   openForm = () => {
//     this.setState({
//       formOpen: true
//     });
//   };

//   closeForm = e => {
//     this.setState({
//       formOpen: false
//     });
//   };

//   handeleAddList = () => {
//     const { dispatch } = this.props;
//     const { text } = this.state;

//     if (text) {
//       this.setState({
//         text: ""
//       });
//       dispatch(addList(text));
//     }

//     return;
//   };

//   handleAddCard = () => {
//     const { dispatch, listID } = this.props;
//     const { text } = this.state;
//     if (text) {
//       this.setState({
//         text: ""
//       });
//       dispatch(addCard(listID, text));
//     }
//   };

//   renderAddButton = () => {
//     const { list } = this.props;
//     const buttonText = list ? "Add list" : "Add card";

//     return (
//       <Button onClick={this.openForm} style={styles.openFormButtonGroup}>
//         {buttonText}
//       </Button>
//     );
//   };

//   renderForm = () => {
//     const { list } = this.props;

//     const placeholder = list
//       ? "Enter list title"
//       : "Enter a title for this card";

//     const buttonTitle = list ? "Add list" : "Add card";

//     return (
//       <div>
//         <Card style={styles.card}>
//           <TextArea
//             placeholder={placeholder}
//             autoFocus
//             onBlur={this.closeForm}
//             value={this.state.text}
//             onChange={this.handleInputChange}
//             style={styles.textArea}
//           />
//         </Card>
//         <Button
//           onMouseDown={list ? this.handeleAddList : this.handleAddCard}
//           variant="contained"
//           style={styles.formButtonGroup}
//         >
//           {buttonTitle}
//         </Button>
//       </div>
//     );
//   };

//   render() {
//     return this.state.formOpen ? this.renderForm() : this.renderAddButton();
//   }
// }

// const styles = {
//   openFormButtonGroup: {
//     display: "flex",
//     alignItems: "center",
//     cursor: "pointer",
//     borderRadius: 3,
//     height: 35,
//     width: 300,
//     paddingLeft: 10,
//     color: "white",
//     backgroundColor: "#48CFAF"
//   },
//   formButtonGroup: {
//     marginTop: 8,
//     display: "flex",
//     color: "#414042",
//     backgroundColor: "#76FEC5"
//   },
//   card: {
//     overflow: "visible",
//     minHeight: 80,
//     minWidth: 270,
//     padding: "6px 8px 2px"
//   },
//   textArea: {
//     resize: "none",
//     width: "100%",
//     overflow: "hidden",
//     outline: "none",
//     border: "none"
//   }
// };

// export default connect()(ActionButton);
