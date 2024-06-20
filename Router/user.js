const express = require("express");
const Router = express.Router();

Router.get("/user", (req, res) => {
  res.send("users");
});

Router.get("/getuser", (req, res) => {
  res.send("users getting");
});

module.exports = Router;
