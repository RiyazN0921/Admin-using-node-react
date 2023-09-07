const jwt = require("jsonwebtoken");
const config = require("../config/db.config");

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      error: "Access denied, token missing",
    });
  }

  jwt.verify(token, config.SECRETE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: "Invalid token",
      });
    }
    req.user = decoded;
    next();
  });
};

const protectedRoutes = async (req, res) => {
  res.json({
    user: req.user,
  });
};

module.exports = {
  authenticateToken,
  protectedRoutes,
};
