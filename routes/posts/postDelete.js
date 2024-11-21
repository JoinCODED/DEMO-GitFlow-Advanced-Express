const express = require("express");

const findPost = require("./findPost");
const { requireAuth } = require("../../middleware");

const router = express.Router();

router.param("id", findPost);

router.delete("/:id", requireAuth, async (req, res) => {
  await req.post.deleteOne();
  res.status(204).end();
});

module.exports = { postDeleteRouter: router };
