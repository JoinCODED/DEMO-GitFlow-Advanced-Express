const express = require("express");

const findPost = require("./findPost");

const router = express.Router();

router.param("id", findPost);

router.get("/:id", (req, res) => {
  res.status(200).json(req.post);
});

module.exports = { postGetRouter: router };
