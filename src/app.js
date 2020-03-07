"use strict";

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { registerRouters } = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = async function init() {
    const router = await registerRouters();
    app.use('/', router);

    //catch 404 and forward to error handler
    app.use(function (req, res, next) {
        const err = new Error("Not found");
        next(err);
    });

    return app;
}
