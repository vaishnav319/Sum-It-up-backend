"use strict";
const dotenv = require("dotenv");
const assert = require("assert");
dotenv.config();

const { PORT, MONGO_DB_PW, MONGO_IAM, MONGO_DB } = process.env;

assert(MONGO_DB_PW, "MongoDB Password is required");
assert(MONGO_IAM, "Mongodb User is required");
assert(MONGO_DB, "MongoDB String is required");
assert(PORT, "Server Port is required");
module.exports = {
  port: PORT,
  mongoPw: MONGO_DB_PW,
  mongoIAM: MONGO_IAM,
  mongoDb: MONGO_DB,
};
