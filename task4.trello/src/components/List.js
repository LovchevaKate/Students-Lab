import React from "react";

const List = ({ title }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 300
  }
};

export default List;
