const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

//api/v1/users
router.post("/", async (req,res)=>{
  const filter={personalCode: req.body.personalCode};
  const doc = req.body;
  const options = {
    upsert: true
  };
  const {n, nModified}=await User.updateOne(filter, doc, options)

  console.log("created user")
  res.send(200);
})

module.exports = router;

