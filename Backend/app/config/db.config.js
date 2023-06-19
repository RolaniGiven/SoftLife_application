module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Given@20/09/03",
    DB: "myproperties",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };