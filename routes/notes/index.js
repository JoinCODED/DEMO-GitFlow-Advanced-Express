const express = require("express");
const { noteCreateRouter } = require("./createNote");

const router = express.Router();

router.use(noteCreateRouter);

module.exports = { notesRouter: router };
