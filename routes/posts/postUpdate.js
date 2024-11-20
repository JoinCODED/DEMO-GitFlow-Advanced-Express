const express = require("express");

const router = express.Router();

router.put("/:id", (req, res) => {
  res.status(200).json({});
});

module.exports = { postUpdateRouter: router };
