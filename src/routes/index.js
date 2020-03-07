"use strict";

const express = require("express");
const router = express.Router();

const Auth = require("./AuthRoutes");

const registerRouters = async () => {
    await Auth(router);

    return router;
};

module.exports = {
    registerRouters,
};
