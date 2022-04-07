require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const { dbConnectMySQL, state } = require("./config/mysql");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes"));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

state == false ? dbConnectMySQL() : setInterval(dbConnectMySQL(), 200000);
