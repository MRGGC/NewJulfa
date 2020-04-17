"use strict";

const Sequelize = require('sequelize');
module.exports = sequelize.define("Admin", {
    username: {
        type: Sequelize.STRING(69),
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.CHAR(60),
        allowNull: false
    },
}, { timestamps: false });
