const express = require("express");

const findPost = require("./findPost");

const router = express.Router();

router.param("id", findPost);

router.delete("/:id", async (req, res) => {
  await req.post.deleteOne();
  res.status(204).end();
});

module.exports = { postDeleteRouter: router };
