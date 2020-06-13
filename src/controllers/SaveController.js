"use strict";
const Sequelize = require("sequelize");
const Data = require("../models/data.js");
const fs = require("fs");

async function dataInfogetter(req, res) {
  const info = fs.readFileSync("Content.json", {encoding:'utf8', flag:'r'});
  console.log(info);
  res.send(JSON.parse(info));
}

async function dataInfoadder(req, res){
  console.log(req.body);
  fs.writeFileSync("Content.json", JSON.stringify(req.body));

  res.send({ success: true });

  // try{
  //   await Data.destroy({ where: {} });
  // }
  // catch(e){
  //   console.log(e)
  //   res.send({ success: false });
  // }
  // finally{
  //   for (let content of list) {
  //     await Data.create({
  //       id: content.id,
  //       icon: content.icon,
  //       link_text: content.link_text,
  //       content: content.content,
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //     });
  //     console.log(content.content);
  //   }
  //   res.send({ success: true });
  // }
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
