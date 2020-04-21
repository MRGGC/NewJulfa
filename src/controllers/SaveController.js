"use strict";
const Sequelize = require("sequelize");
const Data = require("../models/data.js");
const fs = require("fs")


async function dataInfogetter(req, res) {
  const info = await Data.findAll();
  res.send(info);
}

async function dataInfoadder(req, res){
  const data = req.body;
  const newthing = await Data.create({
    id: data.id,
    icon: data.icon,
    link_text: data.link_text,
    content: data.content,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt
  })
  res.send(newthing)
}

async function coordinatesInfogetter(req, res) {
  fs.readFile("Coordinates.json", (err, data) => {
    if(err){
      console.log(err)
    }
    res.send(data)
  })
}



module.exports = {
  dataInfogetter,
  dataInfoadder,
  coordinatesInfogetter
}
