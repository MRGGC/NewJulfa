"use strict";

const SaveController = require("../controllers/SaveController")

module.exports = async (router) => {
    router.get("/save/dataget", SaveController.dataInfogetter);
    router.get("/save/id", SaveController.dataInfoadder);
    router.get("/save/coordinatesget", SaveController.coordinatesInfogetter);
};
