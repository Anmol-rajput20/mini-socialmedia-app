import React, { useState } from "react";
import {
  Card,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const PostCard = ({ post, toggleLike, addComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const isLiked = post.likes.includes("You");

  return (
    <Card
      style={{
        padding: "16px",
        marginTop: "15px",
        borderRadius: "16px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      }}
    >
      {/* HEADER */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center">
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1976d2, #64b5f6)",
            }}
          />

          <div>
            <Typography fontWeight="bold">
              {post.username}
            </Typography>

            <Typography variant="caption" color="gray">
              Just now
            </Typography>
          </div>
        </Stack>

        <Button
          variant="outlined"
          size="small"
          style={{
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: "bold",
            padding: "2px 12px",
            fontSize: "12px",
            marginLeft:"550px"
          }}
        >
          Follow
        </Button>
      </Stack>

      {/* CONTENT */}
      <Typography style={{ marginTop: "12px", fontSize: "14px" }}>
        {post.content}
      </Typography>

      {/* IMAGE */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          style={{
            width: "100%",
            marginTop: "12px",
            borderRadius: "12px",
          }}
        />
      )}

      {/* ACTIONS */}
      <Stack direction="row" spacing={3} marginTop={2} alignItems="center">

        {/* LIKE */}
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton
            onClick={() => toggleLike(post.id, "You")}
          >
            {isLiked ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>

          <Typography style={{ fontSize: "16px" , marginTop:"8px" }}>
            {post.likes.length} Likes
          </Typography>
        </Stack>

        {/* COMMENT */}
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={() => setShowComments(!showComments)}>
            <ChatBubbleOutlineIcon />
          </IconButton>

          <Typography style={{ fontSize: "16px", marginTop:"8px" }}>
            {post.comments.length} Comments
          </Typography>
        </Stack>

      </Stack>

      {/* COMMENTS SECTION */}
      {showComments && (
        <div style={{ marginTop: "10px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />

            <button
              onClick={() => {
                if (!commentText.trim()) return;

                addComment(post.id, "You", commentText);
                setCommentText("");
              }}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                background: "#1976d2",
                color: "white",
                border: "none",
              }}
            >
              Post
            </button>
          </div>

          {/* COMMENT LIST */}
          <div style={{ marginTop: "10px" }}>
            {post.comments.map((c, i) => (
              <div key={i} style={{ fontSize: "13px", marginTop: "5px" }}>
                <b>{c.username}:</b> {c.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default PostCard;