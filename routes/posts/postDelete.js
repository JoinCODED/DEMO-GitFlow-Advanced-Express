const express = require("express");

const findPost = require("./findPost");
const { requireAuth } = require("../../middleware");
const { NotAuthorizedError } = require("../../errors");

const router = express.Router();

router.param("id", findPost);

router.delete("/:id", requireAuth, async (req, res, next) => {
  const { user, post } = req;
  if (post.author.id.toString("hex") !== user.id.toString())
    return next(NotAuthorizedError("انت منو؟"));

  await post.deleteOne();
  res.status(204).end();
});

module.exports = { postDeleteRouter: router };
