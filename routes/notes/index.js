const express = require("express");
const { noteCreateRouter } = require("./createNote");
const { notesGetRouter } = require("./getNotes");
const { noteGetRouter } = require("./noteGet");

const router = express.Router();

router.use(noteCreateRouter);
router.use(notesGetRouter);
router.use(noteGetRouter);

module.exports = { notesRouter: router };
