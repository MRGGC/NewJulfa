"use strict";

const AuthController = require("../controllers/AuthController");

module.exports = async (router) => {
    router.get("/admin", AuthController.Login);
};
