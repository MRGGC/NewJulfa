"use strict";

const Sequelize = require("sequelize");
module.exports = sequelize.define("Data", {
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
