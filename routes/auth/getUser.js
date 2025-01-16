const express = require("express");

const User = require("../../models/User");

const router = express.Router();

router.get("/:username", async (req, res) => {
  const username = req.params.username;

  const user = await User.findOne({ username });

  res.status(200).json(user);
});

module.exports = { getUserRouter: router };
