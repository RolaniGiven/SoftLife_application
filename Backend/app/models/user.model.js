//These Sequelize Models represents users table in PostgreSQL database.
//After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };

  