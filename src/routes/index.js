"use strict";

const express = require("express");
const router = express.Router();

const Auth = require("./AuthRoutes");
const Save = require("./SaveRoutes")

const registerRouters = async () => {
    await Auth(router);
    await Save(router);
    return router;
};

module.exports = {
    registerRouters,
};
