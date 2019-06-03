import React from "react";
import CardTrello from "./CardTrello";

const List = ({ title }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      <CardTrello />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 300,
    padding: 8
  }
};

export default List;
