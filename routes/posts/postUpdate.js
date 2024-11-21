const express = require("express");

const findPost = require("./findPost");
const validateRequest = require("../../middleware/validateRequest");
const { body } = require("express-validator");
const { requireAuth } = require("../../middleware");

const validators = [
  body("title").not().isEmpty().withMessage("Title is required"),
  body("content").not().isEmpty().withMessage("Content is required"),
];

const router = express.Router();

router.param("id", findPost);

router.put("/:id", requireAuth, validators, validateRequest, (req, res) => {
  const { user, post } = req;
  if (post.author.id.toString("hex") !== user.id.toString())
    return next(NotAuthorizedError("انت منو؟"));
  // Loop over keys and update the post
  for (const key in req.body) req.post[key] = req.body[key];
  // Save those changes to mongo
  req.post.save();

  res.status(200).json(req.post);
});

module.exports = { postUpdateRouter: router };
