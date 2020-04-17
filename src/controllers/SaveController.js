"use strict";
const Sequelize = require("sequelize");
const Data = require("../models/data.js");


async function Infogetter(req, res) {
  const info = await Data.findAll();
  res.send(info);
}

async function Infoadder(req, res){
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

module.exports = {
  Infogetter,
  Infoadder
}
