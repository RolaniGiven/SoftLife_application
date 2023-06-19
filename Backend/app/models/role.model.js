//These Sequelize Models represents roles table in PostgreSQL database.
//After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Role;
  };