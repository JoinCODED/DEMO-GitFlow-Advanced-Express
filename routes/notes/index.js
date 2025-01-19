const express = require("express");
const { noteCreateRouter } = require("./createNote");
const { notesGetRouter } = require("./getNotes");

const router = express.Router();

router.use(noteCreateRouter);
router.use(notesGetRouter);

module.exports = { notesRouter: router };
