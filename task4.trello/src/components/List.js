import React from "react";
import CardTrello from "./CardTrello";
import ActionButton from "./ActionButton";

const List = ({ title, cards, listID }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(card => (
        <CardTrello key={card.id} text={card.text} />
      ))}
      <ActionButton listID={listID} />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
};

export default List;
