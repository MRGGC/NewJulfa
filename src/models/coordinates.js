"use strict";

const Sequelize = require("sequelize");
module.exports = sequelize.define("Coordinates", {
  lat: {
    type: Sequelize.FLOAT(),
    allowNull: true
  },
  lon: {
    type: Sequelize.FLOAT(),
    allowNull: true
  },
  status: {
    type: Sequelize.TEXT(),
    allowNull: true
  },
  start: {
    type: Sequelize.INTEGER(),
    allowNull: true
  },
  end: {
    type: Sequelize.INTEGER(),
    allowNull: true
  }
})
