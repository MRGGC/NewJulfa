"use strict";

const AuthController = require("../controllers/AuthController");

module.exports = async (router) => {
    router.post("/login", AuthController.Login);
};
