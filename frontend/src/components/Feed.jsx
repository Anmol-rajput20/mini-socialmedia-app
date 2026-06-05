import React from "react";
import PostCard from "./PostCard";

const Feed = ({ posts, toggleLike, addComment }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          toggleLike={toggleLike}
          addComment={addComment} 
        />
      ))}
    </div>
  );
};

export default Feed;