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
          <Box
            component="img"
            src={blog?.data?.image}
            alt="Blog"
            sx={{
              width: "100%",
              borderRadius: "16px",
              height: { xs: "200px", sm: "350px", md: "500px" }, // Responsive height
            }}
          />
        </Box>
        <Box
          display="flex"
          sx={{ pl: { md: 16, sm: 8 }, gap: { md: 16, sm: 8, xs: 2 } }}
          gap={16}
          mt={5}
        >
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
        <Box
          sx={{ pl: { md: 16, sm: 8 }, pr: { md: 8, sm: 4 } }}
          mt={5}
          color="#fff"
        >
          <Typography
            sx={{
              fontSize: { md: "40px", sm: "32px", xs: "20px" },
              color: "#FF8F00",
              fontWeight: "96px",
              mb: "6px",
            }}
          >
            {blog?.data?.title}
          </Typography>
          {blog?.data?.content}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogDetails;
