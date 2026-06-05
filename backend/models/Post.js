const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    username: { type: String, default: "You" },
    content: { type: String, default: "" },
    image: { type: String, default: "" },

    likes: { type: [String], default: [] },

    comments: {
      type: [
        {
          username: String,
          text: String,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);