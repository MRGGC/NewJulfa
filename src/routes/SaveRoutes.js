"use strict";

const SaveController = require("../controllers/SaveController")

module.exports = async (router) => {
    router.get("/saveget", SaveController.Infogetter);
    router.get("/saveadd", SaveController.Infoadder);
};
