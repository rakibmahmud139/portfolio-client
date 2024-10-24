import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../redux/features/blogApi";
import { Box, Container, Typography } from "@mui/material";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-CA");
  };

  return (
    <Box sx={{ bgcolor: "#1f1f38" }}>
      <Container maxWidth="lg">
        <Box sx={{ pt: "8px" }}>
          <img
            src={blog?.data?.image}
            alt="Blog"
            style={{ width: "100%", height: "500px", borderRadius: "16px" }}
          />
        </Box>
        <Box display="flex" pl={16} gap={16} mt={5}>
          <Typography
            variant="caption"
            sx={{
              background: "#FFEEEE",
              padding: "0.3rem 0.5rem",
              borderRadius: 1,
              fontFamily: "serif",
            }}
          >
            Publish Date: {formatDate(blog?.data?.publicationDate)}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              background: "#E0F7FA",
              padding: "0.3rem 0.5rem",
              borderRadius: 1,
              fontFamily: "serif",
            }}
          >
            Category: {blog?.data?.platform}
          </Typography>
        </Box>
        <Box pl={16} pr={8} mt={5} color="#fff">
          <Typography sx={{ fontSize: "48px", fontWeight: "48px", mb: "6px" }}>
            {blog?.data?.title}
          </Typography>
          <Typography>{blog?.data?.content}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogDetails;
