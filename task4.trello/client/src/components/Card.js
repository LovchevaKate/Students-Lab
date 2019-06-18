// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";

// const CardTrello = ({ text }) => {
//   return (
//     <Card style={styles.cardConteiner}>
//       <CardContent>
//         <Typography gutterBottom>{text}</Typography>
//       </CardContent>
//     </Card>
//   );
// };

// componentDidMount() {
//     fetch("https://localhost:44342/api/ListAPI")
//       .then(response => response.json())
//       .then(result => this.setState({ data: result, isFetching: false }))
//       .catch(e => {
//         console.log(e);
//         this.setState({ data: {}, isFetching: false, error: e });
//       });
//   }

// const styles = {
//   cardConteiner: {
//     marginBottom: 8
//   }
// };

// export default CardTrello;
