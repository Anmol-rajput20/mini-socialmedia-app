import React from "react";
import { Stack, Button, Card } from "@mui/material";

const Filters = () => {
  return (
    <Card
      style={{
        padding: "10px",
        marginTop: "15px",
        borderRadius: "12px",
      }}
    >
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Button variant="contained" size="small">
          All Posts
        </Button>

        <Button variant="outlined" size="small">
          For You
        </Button>

        <Button variant="outlined" size="small">
          Most Liked
        </Button>

        <Button variant="outlined" size="small">
          Most Commented
        </Button>
      </Stack>
    </Card>
  );
};

export default Filters;