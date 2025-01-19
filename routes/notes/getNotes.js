const express = require("express");
const Note = require("../../models/Note");

const router = express.Router();

router.get("/", async (req, res) => {
  const notes = await Note.find().select("-body");
  res.json(notes);
});

module.exports = { notesGetRouter: router };
