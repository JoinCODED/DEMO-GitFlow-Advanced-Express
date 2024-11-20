const express = require("express");

const router = express.Router();

router.delete("/:id", (req, res) => {
  res.status(204).end();
});

module.exports = { postDeleteRouter: router };
