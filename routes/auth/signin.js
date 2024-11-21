const express = require("express");
const { body } = require("express-validator");

// const Post = require("../../models/Post");
const validateRequest = require("../../middleware/validateRequest");

const router = express.Router();

const validators = [
  body("title").not().isEmpty().withMessage("Title is required"),
  body("content").not().isEmpty().withMessage("Content is required"),
];

router.post("/signin", validators, validateRequest, async (req, res) => {
  // Create a user

  // Generate a token

  // Respond with the token
  res.status(200).json({});
});

module.exports = { signinRouter: router };
