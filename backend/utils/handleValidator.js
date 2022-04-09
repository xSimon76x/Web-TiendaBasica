const { validationResult } = require("express-validator");

/**
 * Validar los resultados obtenidos por la api
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next(); //continua hacia el controlador
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};

module.exports = validateResults;
