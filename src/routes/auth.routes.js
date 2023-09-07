const express = require("express");
const authController = require("../controllers/user.controller");

const Userrouter = express.Router();

Userrouter.post("/signup", authController.signup);
Userrouter.post("/login", authController.login);

module.exports = Userrouter;
