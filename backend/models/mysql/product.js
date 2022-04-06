const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  discount: {
    type: DataTypes.NUMBER,
  },
  categoryId: {
    type: DataTypes.NUMBER,
  },
});

module.exports = Product;
