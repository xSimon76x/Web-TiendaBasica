const models = {
  productModel: require(`./mysql/product`),
  categoryModel: require(`${pathModels}/category`),
};

module.exports = models;
