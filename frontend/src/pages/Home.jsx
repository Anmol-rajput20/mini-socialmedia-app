import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CreatePost from "../components/CreatePost";
import Filters from "../components/Filters";
import Feed from "../components/Feed";
import {useEffect} from "react";
import API from "../api";
import {Navigate} from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

 
  const fetchPosts = async () => {
    try{
      const res = await API.get("/posts");
      setPosts(res.data);
    }catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const token = localStorage.getItem("token");

  if(!token) {
    return <Navigate to="/login" />;
  }


  // LIKE TOGGLE (add/remove username)
  const toggleLike = async (postId) => {
    try{
      await API.put(`/posts/like/${postId}`, {
        username:"You",
      });
      fetchPosts();
    } catch(err) {
      console.log(err);
    }
    
  };

  // ADD COMMENT
  const addComment = async (postId, username, text) => {
    try{
      await API.put(`/posts/comment/${postId}`, {
        username,
        text,
      });
      fetchPosts();
    } catch(err) {
      console.log(err);
    }
  };

  // CREATE POST
  const createPost = async (data) => {
    try{
      await API.post("/posts", {
        username: user?.username,
        content: data.text,
        image: data.image || "",
      });
      fetchPosts();
    } catch(err) {
      console.log(err);
    }
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