/**
 * Creacion de una ruta estatica para la api
 */
const bsaleApiBase = axios.create({
  baseURL: "http://localhost:3001/api",
});

/**
 * retorna en base a la creacion de la BaseURL,
 * datos respecto a la extension de la api,
 * que se le asigne como parametro
 * @param {*} extensionApi
 * @returns
 */
const getData = (extensionApi) => {
  return bsaleApiBase.get(extensionApi);
};

/**
 * Rutas en documentacion postman https://documenter.getpostman.com/view/11549316/UVyxRZqc
 */
