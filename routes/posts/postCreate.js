const express = require("express");
const { body } = require("express-validator");

const Post = require("../../models/Post");
const validateRequest = require("../../middleware/validateRequest");

const router = express.Router();

const validators = [
  body("title").not().isEmpty().withMessage("Title is required"),
  body("content").not().isEmpty().withMessage("Content is required"),
];

router.post("/", validators, validateRequest, async (req, res) => {
  const newPost = await Post.create(req.body);

  // TODO: Add the author

  res.status(201).json(newPost);
});

module.exports = { postCreateRouter: router };
