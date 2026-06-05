import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CreatePost from "../components/CreatePost";
import Filters from "../components/Filters";
import Feed from "../components/Feed";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Anmol",
      content: "Welcome to my social app 🚀",
      likes: [],
      comments: [],
    },
  ]);

  // LIKE TOGGLE (add/remove username)
  const toggleLike = (postId, username) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const alreadyLiked = post.likes.includes(username);

          return {
            ...post,
            likes: alreadyLiked
              ? post.likes.filter((u) => u !== username)
              : [...post.likes, username],
          };
        }
        return post;
      })
    );
  };

  // ADD COMMENT
  const addComment = (postId, username, text) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              { username, text },
            ],
          };
        }
        return post;
      })
    );
  };

  // CREATE POST
  const createPost = (data) => {
    const newPost = {
      id: Date.now(),
      username: "You",
      content: data.text,
      image: data.image ? URL.createObjectURL(data.image) : null,
      likes: [],
      comments: [],
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div style={{ background: "#f4f6f8", minHeight: "100vh" }}>
      <Header />

      <div style={{ width: "50%", margin: "auto", paddingTop: "20px" }}>
        <SearchBar />

        <CreatePost createPost={createPost} />

        <Filters />

        <Feed
          posts={posts}
          toggleLike={toggleLike}
          addComment={addComment}
        />
      </div>
    </div>
  );
};

export default Home;