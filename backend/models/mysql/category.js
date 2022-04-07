const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Category = sequelize.define(
  "typeCategory",
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "category",
    timestamps: false,
  }
);

module.exports = Category;
