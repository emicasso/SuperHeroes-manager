module.exports = {
  validateRequiredEnvs: (requiredEnvs) => {
    //recorremos array y verificar si existe en la variable de entorno, sino se manda error
    for (const requiredEnv of requiredEnvs) {
      if (!process.env[requiredEnv])
        throw new Error(`${requiredEnv} must be defined on the .env file`);
    }
  },
};
