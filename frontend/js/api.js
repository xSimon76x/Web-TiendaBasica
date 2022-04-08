const bsaleApiBase = axios.create({
  baseURL: "http://localhost:3001/api",
});

const getData = (extensionApi) => {
  return bsaleApiBase.get(extensionApi);
};
