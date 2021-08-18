const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const User = require("./routes/user");
const Postc = require("./routes/postc");
const Auth = require("./routes/auth");
require("dotenv").config();

const cda = express();

cda.use(express.json());
cda.use(cors());
cda.use("/api/postc", Postc);
cda.use("/api/user", User);
cda.use("/api/auth", Auth);

cda.listen(process.env.PORT, () =>
  console.log("Backend server running OK, on port: ", process.env.PORT)
);

dbConnection();
