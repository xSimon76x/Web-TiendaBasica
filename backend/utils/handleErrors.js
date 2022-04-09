/**
 * Manejador de errores para la api
 * @param {*} res
 * @param {*} message
 * @param {*} code
 */
const handleHttpError = (res, message = "ALGO_SUCEDIO", code = 403) => {
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpError };
