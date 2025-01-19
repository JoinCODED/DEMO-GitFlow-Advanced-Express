const { model, Schema } = require("mongoose");

const NotesSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.updatedAt;
      },
      versionKey: false,
    },
  }
);

module.exports = model("Notes", NotesSchema);
