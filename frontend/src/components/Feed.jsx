import React from "react";
import PostCard from "./PostCard";

const Feed = ({ posts, toggleLike, addComment }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          toggleLike={toggleLike}
          addComment={addComment}   // ✅ ADD THIS LINE
        />
      ))}
    </div>
  );
};

export default Feed;