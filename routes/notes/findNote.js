const { NotFoundError } = require("../../errors");
const Note = require("../../models/Note");

const findNote = async function (req, res, next, id) {
  const foundNote = await Note.findById(id);

  if (!foundNote) return next(NotFoundError("Note not found"));

  req.note = foundNote;

  next();
};

module.exports = { findNote };
