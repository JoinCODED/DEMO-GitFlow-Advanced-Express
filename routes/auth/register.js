const express = require("express");
const jwt = require("jsonwebtoken");
const { body } = require("express-validator");

const User = require("../../models/User");

const validateRequest = require("../../middleware/validateRequest");
const { BadRequestError } = require("../../errors");

const router = express.Router();

const validators = [
  body("email").not().isEmpty().withMessage("Email is required"),
  body("username").not().isEmpty().withMessage("Username is required"),
  body("username")
    .isAlphanumeric()
    .isLowercase()
    .withMessage("Username should be alphanumeric and lowercase"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Password must be between 4 and 20 characters"),
];

router.post(
  "/register",
  validators,
  validateRequest,
  async (req, res, next) => {
    const { email, username, password } = req.body;

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return next(BadRequestError(`${email} is already registered`));

    const existingUsername = await User.findOne({ username });
    if (existingUsername)
      return next(BadRequestError(`${username} is already taken`));

    // Create a user
    const user = await User.create({ email, username, password });

    // Generate a token
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    // Respond with the token
    res.status(201).json({ token });
  }
);

module.exports = { regsiterRouter: router };
