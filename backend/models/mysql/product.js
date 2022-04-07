const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
const Category = require("./category");

const Product = sequelize.define(
  "product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    discount: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    category: {
      type: DataTypes.NUMBER,
      allowNull: true,
      key: true,
    },
  },
  {
    tableName: "product",
    timestamps: false,
  }
);

/**
 * (Metodo Custom) Ejercer relacion entre product y category
 */
Product.findAllData = function () {
  Product.belongsTo(Category, {
    foreignKey: "category", //foreignKey de Product, para asociar a primaryKey en Category
  });
  return Product.findAll({
    include: Category, //incluir objeto de la tabla Categorias por su foreignKey
  });
};

/**
 * (Metodo Custom) Ejercer relacion entre product y category, respecto a busqueda de un producto por su id
 * @param {*} id
 * @returns
 */
Product.findOneData = function (id) {
  Product.belongsTo(Category, {
    foreignKey: "category",
  });
  return Product.findOne({
    where: { id },
    include: Category,
  });
};

module.exports = Product;
