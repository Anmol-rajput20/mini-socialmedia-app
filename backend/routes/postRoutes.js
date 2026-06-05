const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET all posts
router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// CREATE post
router.post("/", async (req, res) => {
  const { username, content, image } = req.body;

  const newPost = new Post({
    username: username || "You",
    content: content || "",
    image: image || "",
    likes: [],
    comments: [],
  });

  const saved = await newPost.save();
  res.status(201).json(saved);
});




// LIKE post
router.put("/like/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post.likes.includes(req.body.username)) {
    post.likes.push(req.body.username);
  } else {
    post.likes = post.likes.filter(u => u !== req.body.username);
  }

  await post.save();
  res.json(post);
});

// COMMENT
router.put("/comment/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  post.comments.push({
    username: req.body.username,
    text: req.body.text,
  });

  await post.save();
  res.json(post);
});

module.exports = router;