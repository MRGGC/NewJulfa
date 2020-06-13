"use strict";
const bcrypt = require("bcrypt");
const Admin = require("../models/admin.js");
const jwt = require("jsonwebtoken");

async function Login(req, res) {
  const body = req.body;
  const admin = await Admin.findOne({where: {username: body.username}});
  console.log(body);
  if (admin != null) {
    bcrypt.compare(body.password, admin.password, (err, result) => {
      if (err) {
        console.log(err);
        res.send({success: false, error: 'ERROR'});
      }
      if (result) {
        jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
          if (err) {
            console.log(err);
            res.send({success: false, error: 'ERROR'});
          }
          res.send({success: true, token});
        }, {expiresIn: "7d"});
      }
      else {
        return res.send({success: false, error: "Wrong password!"})
      }
    });
  }
  else {
    return res.send({success: false, error: "Wrong username!"});
  }
}

module.exports = {
    Login
}
