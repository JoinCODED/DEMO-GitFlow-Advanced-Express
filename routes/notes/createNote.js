const express = require("express");
const { body } = require("express-validator");

const Note = require("../../models/Note");
const User = require("../../models/User");

const { requireAuth, validateRequest } = require("../../middleware");

const router = express.Router();

const validators = [
  body("title").not().isEmpty().withMessage("Title is required"),
  body("body").not().isEmpty().withMessage("Body is required"),
];

router.post("/", requireAuth, validators, validateRequest, async (req, res) => {
  const newNote = await Note.create(req.body);

  const author = await User.findById(req.user.id);

  newNote.author = author.id;

  await newNote.save();

  res
    .status(201)
    .json(await newNote.populate("author", "-password -__v -posts"));
});

module.exports = { noteCreateRouter: router };
