const { NotFoundError } = require("../../errors");
const Post = require("../../models/Post");

const findPost = async function (req, res, next, id) {
  const foundPost = await Post.findById(id);

  if (!foundPost) return next(NotFoundError("Post not found"));

  req.post = foundPost;

  next();
};

module.exports = findPost;
