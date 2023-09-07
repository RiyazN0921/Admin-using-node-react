// app/controllers/authController.js
const User = require("../models/users.model");
const jwt = require("jsonwebtoken");
const config = require("../config/db.config");

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = User.create({ email, password });
    await user.save();
    res.json({
      message: "Signup successful",
    });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      res.status(401).json({ error: "Invalid credentials" });
    } else {
      const token = jwt.sign({ email }, config.SECRETE_KEY, {
        expiresIn: "1h",
      });
      res.json({ token });
    }
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
};

module.exports = {
  login,
  signup,
};
