'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("admins", {
      username: {
          type: Sequelize.STRING(69),
          allowNull: false,
          primaryKey: true
      },
      password: {
          type: Sequelize.CHAR(60),
          allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("admins");
  }
};
