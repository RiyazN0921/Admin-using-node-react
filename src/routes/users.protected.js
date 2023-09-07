const express = require("express");
const authMiddleware = require("../middleware/users.middleware");

const router = express.Router();

router.get("/userdetails",authMiddleware.authenticateToken)

module.exports = router;
