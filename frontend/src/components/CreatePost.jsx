import React, { useState } from "react";
import { Card, TextField, Button, Stack, IconButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const CreatePost = ({ createPost}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handlePost = () => {
    if (!text.trim() && !imageFile) return;

    const formData = new FormData();

    formData.append("username",user?.username);
    formData.append("content",text.trim());
    if(imageFile) {
      formData.append("image",imageFile);
    }

    createPost(formData);
    
    setText("");
    setImageFile(null);
    setImagePreview("");
  };

  return (
    <Card
      style={{
        padding: "16px",
        marginTop: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      }}
    >
      {/* Top Row */}
      <Stack direction="row"
             justifyContent = "space-between"
             alignItems = "center"
             style = {{marginTop : "15px"}}
      >
        
        {/* Avatar */}
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1976d2, #64b5f6)",
          }}
        />

        {/* Input Section */}
        <div style={{ flex: 1 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening in your world?"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ fontSize: "14px" }}
          />
        </div>
      </Stack>

      <input
        type="file"
        accept="image/*"
        id="imageInput"
        hidden
        onChange={(e) => {
          const file = e.target.files[0];
          if (!file) return;

          setImageFile(file);
          setImagePreview(URL.createObjectURL(file));
        }}
      />

      {imagePreview && (
        <img
          src={imagePreview}
          alt="preview"
          style={{
            width:"100px",
            marginTop:"10px",
            borderRadius:"10px",
            maxHeight:"200px",
            objectFit:"cover",
          }}
        />
      )}

      {/* Bottom Action Bar */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
      >
        {/* Left Icons */}
        <Stack direction="row" spacing={1}>
          <IconButton 
            size="small"
            onClick={() => document.getElementById("imageInput").click()}
          >
            <ImageIcon />
          </IconButton>

          <IconButton size="small">
            <EmojiEmotionsIcon />
          </IconButton>
        </Stack>

        {/* Post Button */}
        <Button
          variant="contained"
          onClick={handlePost}
          disabled={!text.trim() && !imagePreview}
          style={{
            borderRadius: "20px",
            padding: "6px 22px",
            textTransform: "none",
            fontWeight: "bold",
            marginRight: "4px",
            marginTop: "6px"
          }}
        >
          Post
        </Button>
      </Stack>
    </Card>
  );
};

export default CreatePost;