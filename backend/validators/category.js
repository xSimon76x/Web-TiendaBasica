const validateResults = require("../utils/handleValidator");

const { check } = require("express-validator");

/**
 * Validar que al intentar obtener una categoria, si incluya el id
 */

const validatorGetItem = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorGetItem };
