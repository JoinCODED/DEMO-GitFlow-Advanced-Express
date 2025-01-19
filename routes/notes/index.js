const express = require("express");
const { noteCreateRouter } = require("./createNote");
const {noteGetRouter} = require("noteGet")

const router = express.Router();

router.use(noteCreateRouter);
router.use(noteGetRouter);

module.exports = { notesRouter: router };
