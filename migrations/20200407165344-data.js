'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("data", {
      id: {
        type: Sequelize.STRING(),
        allowNull: false,
        primaryKey: true
      },
      icon: {
        type: Sequelize.STRING(),
        allowNull: false
      },
      link_text: {
        type: Sequelize.TEXT(),
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT(),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE(),
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE(),
        allowNull: true
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("data");
  }
};
