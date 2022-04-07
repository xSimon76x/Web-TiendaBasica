const { matchedData } = require("express-validator");
const { categoryModel } = require("../models");
const { handleHttpError } = require("../utils/handleErrors");

/**
 * Obtener lista de categorias de la db MySQL
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await categoryModel.findAll({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_LIST_ITEMS");
  }
};

/**
 * Obtener una categoria en especifico, de la db MySQL
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await categoryModel.findOne({ where: { id } });
    res.send({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

module.exports = { getItems, getItem };
