const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    username: String,
    content: String,
    image: String,
    likes: [
        {
            type: String,
        },
    ],
    comments: [
        {
            username: String,
            text: String,
        },
    ],
}, {timestamps: true});

module.exports = mongoose.model("Post",postSchema);