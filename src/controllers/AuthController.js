"use strict";
const bcrypt = require("bcrypt");
const Admin = require("../models/admin.js");
const encryptedPass = bcrypt.hashSync("test", +process.env.BCRYPT_SALT_ROUNDS);
const jwt = require("jsonwebtoken");

async function Login(req, res) {
  const body = req.body; //postmanov req em anum talis em arjeqnery
  const admin = await Admin.findOne({where: {username: body.username}}) //DB-ica nayum
  if (admin != null){
    bcrypt.compare(body.password, encryptedPass, (err, result) =>{
      if (err){
        console.log(err)
      }
      if (result == true){
        res.send("Successfully logged in!")
        jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET, (err, token) =>{
          if (err){
            console.log(err)
          }
          console.log(token)
        }, {expiresIn: "7d"});
      }
      else{
        res.send("Wrong password!")
        return;
      }
    });
  }
  else{
    res.send("Wrong username!");
    return;
  }
}

module.exports = {
    Login
}
