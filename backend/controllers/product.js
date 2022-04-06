const { matchedData } = require("express-validator");
const { productModel } = require("../models");
const { handleHttpError } = require("../utils/handleErrors");

/**
 * Obtener lista de productos de la db MySQL
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await productModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_LIST_ITEMS");
  }
};

/**
 * Obtener una producto en especifico, de la db MySQL
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await productModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

module.exports = { getItems, getItem };
