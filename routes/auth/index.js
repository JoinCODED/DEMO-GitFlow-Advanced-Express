const express = require("express");

const router = express.Router();

router.use("/hello", (req, res) => {
  res.json({ message: "hello" });
});

module.exports = { authRouter: router };
