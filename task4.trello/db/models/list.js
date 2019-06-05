export default (Sequelize, sequelize) =>
  sequelize.define("list", {
    id: {
      autoIncrement: true,
      type: Sequelize.INT,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    }
  });
