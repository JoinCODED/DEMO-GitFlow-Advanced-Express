const express = require("express");

const findNote = require("./findNote");

const router = express.Router();

router.param("id", findNote);

router.get("/:id", (req, res) => {
  res.status(200).json(req.note);
});

module.exports = { noteGetRouter: router };
