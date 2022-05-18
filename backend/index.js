require("dotenv").config();

//requerimos de nuestra carpeta utils el environments(se encuentra modularizado en index), para ello destructuramos nuestro index
const {
  environmentUtils: { validateRequiredEnvs },
} = require("./utils");

const requiredEnvs = ["PORT"];

validateRequiredEnvs(requiredEnvs);
//requerimos nuestro server donde se encuentra nuestro puerto
require('./server')