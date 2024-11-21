const express = require("express");
const User = require("../../models/User");
const { requireAuth } = require("../../middleware");

const router = express.Router();

router.get("/me", requireAuth, async (req, res) => {
  const user = await User.findById(req.user.id).populate(
    "posts",
    "-author -__v"
  );
  res.status(200).json(user);
});

module.exports = { meRouter: router };
