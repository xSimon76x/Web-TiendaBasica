const { Sequelize } = require("sequelize");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;
let state = false;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

const dbConnectMySQL = async () => {
  try {
    await sequelize.authenticate();
    state = true;
    console.log("MYSQL Conexion correcta!");
  } catch (error) {
    console.log("MYSQL Error de conexión:", error);
  }
};

module.exports = { sequelize, dbConnectMySQL, state };
