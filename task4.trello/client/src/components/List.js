// import React, { Component } from "react";
// import Card from "./Card";
// import ActionButton from "./ActionButton";

// class List extends Component {
//   state = { data: {}, isFetching: true, error: null };

//   componentDidMount() {
//     fetch("https://localhost:44342/api/ListAPI")
//       .then(response => response.json())
//       .then(result => this.setState({ data: result, isFetching: false }))
//       .catch(e => {
//         console.log(e);
//         this.setState({ data: {}, isFetching: false, error: e });
//       });
//   }

//   render() {
//     const { data, isFetching, error } = this.state;
//     if (isFetching) return <div>...Loading</div>;

//     if (error) return <div>{`Error: ${error.message}`}</div>;

//     return (
//       <div className="Board">
//         <div style={styles.boardConteiner}>
//           {data.map(list => (
//             <List />
//           ))}
//           <ActionButton list />
//         </div>
//       </div>
//     );
//   }
// }

// const List = ({ title, listID }) => {
//   return (
//     <div style={styles.container}>
//       <h4>{title}</h4>
//       {data.map(card => (
//         <Card key={card.id} text={card.text} />
//       ))}
//       <ActionButton listID={listID} />
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: "#7AB1FF",
//     borderRadius: 3,
//     width: 300,
//     padding: 8,
//     height: "100%",
//     marginRight: 8
//   }
// };

// export default List;
