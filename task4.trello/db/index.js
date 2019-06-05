export default Sequelize => {
  const sequelize = new Sequelize("trello", null, null, {
    host: "Kate",
    dialect: "sqlite",
    storage: "trello.db"
  });

  const List = require("./models/list")(Sequelize, sequelize);
  const Card = require("./models/card")(Sequelize, sequelize);

  Card.belongsToMany(List, { as: "Lists", through: "ListsCards" });
  return {
    lists: List,
    cards: Card,

    Sequelize,
    sequelize
  };
};
