const express = require("express");
const jwt = require("jsonwebtoken");
const { body } = require("express-validator");

// const Post = require("../../models/Post");
const validateRequest = require("../../middleware/validateRequest");
const User = require("../../models/User");
const { BadRequestError } = require("../../errors");

const router = express.Router();

const validators = [
  body("username").not().isEmpty().withMessage("Username is required"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Password must be between 4 and 20 characters"),
];

router.post("/signup", validators, validateRequest, async (req, res) => {
  const { username, password } = req.body;

  // Check for existing user
  const existingUser = await User.findOne({ username });

  if (existingUser) throw BadRequestError("Username is taken");

  // Create a user
  const user = await User.create({ username, password });

  // Generate a token
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRATION }
  );

  // Respond with the token
  res.status(201).json({ token });
});

module.exports = { signupRouter: router };
