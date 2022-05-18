require("dotenv").config();

//requerimos de nuestra carpeta utils el environments(se encuentra modularizado en index), para ello destructuramos nuestro index
const {
  environmentUtils: { validateRequiredEnvs },
} = require("./utils");

const requiredEnvs = ["PORT", "MONGO_URI"];
validateRequiredEnvs(requiredEnvs);

const { mongoDBHelpers } = require("./helpers");

(async () => {
  await mongoDBHelpers.connect();
  //requerimos nuestro server donde se encuentra nuestro puerto
  require("./server");
})();

//desconectar de nuestra base de datos
process.on("SIGINT", () => {
  mongoDBHelpers.disconnect().then((connectionState) => {
    //tiene que retornar 0 si esta desconectado
    console.log("Database desconectada, connection state:", connectionState);
    console.log("Cerrando el proceso");
    process.exit(0);
  });
});
