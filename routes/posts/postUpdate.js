const express = require("express");

const findPost = require("./findPost");
const validateRequest = require("../../middleware/validateRequest");
const { body } = require("express-validator");

const validators = [
  body("title").not().isEmpty().withMessage("Title is required"),
  body("content").not().isEmpty().withMessage("Content is required"),
];

const router = express.Router();

router.param("id", findPost);

router.put("/:id", validators, validateRequest, (req, res) => {
  // Loop over keys and update the post
  for (const key in req.body) req.post[key] = req.body[key];
  // Save those changes to mongo
  req.post.save();

  res.status(200).json(req.post);
});

module.exports = { postUpdateRouter: router };
