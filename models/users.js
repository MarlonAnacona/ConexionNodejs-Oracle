const Sequelize = require("sequelize-oracle");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      tipoDocumento: {
        type: Sequelize.STRING,
        required: true,
      },

      name: {
        type: Sequelize.STRING,
        required: true,
      },
      lastname: {
        type: Sequelize.STRING,
        required: true,
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );
};
