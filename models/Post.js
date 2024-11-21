const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Post", PostSchema);
