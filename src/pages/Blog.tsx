import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGetAllBlogsQuery } from "../redux/features/blogApi";
import { TBlog } from "../types";

AOS.init();

const Blog = () => {
  const { data: blogs } = useGetAllBlogsQuery({});

  console.log(blogs);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-CA");
  };

  const handleContinueClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div id="blog" style={{ marginTop: "96px" }}>
      <Typography
        data-aos="zoom-out-right"
        data-aos-easing="linear"
        data-aos-duration="2000"
        component="h1"
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#FF8F00",
          mb: "48px",
          fontFamily: "sans-serif",
        }}
      >
        My Blogs
      </Typography>
      <Container
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "48px",
          pt: "24px",
          pb: "24px",
        }}
      >
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {blogs?.data?.slice(0, 4).map((blog: TBlog) => (
            <Grid key={blog?._id} item xs={12} md={6}>
              <Card
                data-aos="zoom-out-left"
                data-aos-easing="linear"
                data-aos-duration="2000"
                sx={{
                  boxShadow: 16,
                  borderRadius: 6,
                  background: "rgb(146, 144, 195)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: 360,
                  transition: "transform 0.5s",
                  "&:hover": {
                    border: "2px solid #FF8F00",
                    transform: "scale(1.05)",
                  },
                  m: 2,
                  mx: "auto",
                }}
              >
                <CardMedia
                  component="img"
                  image={blog?.image}
                  alt="projectImg"
                  sx={{
                    width: "100%",
                    height: 160,
                    borderRadius: "8px 8px 0 0",
                    transition: "transform 0.5s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
                <CardContent>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography
                      variant="caption"
                      sx={{
                        background: "#FFEEEE",
                        padding: "0.3rem 0.5rem",
                        borderRadius: 1,
                        fontFamily: "serif",
                      }}
                    >
                      {formatDate(blog?.publicationDate)}
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
                      {blog?.platform}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    component="div"
                    mb={2}
                    sx={{ fontFamily: "serif" }}
                  >
                    {blog?.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#686D76"
                    sx={{ fontFamily: "serif" }}
                  >
                    {blog?.summary ? blog.summary.slice(0, 126) : ""}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-around" }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#FF8F00",
                      mt: 2,
                      mb: 1,
                      width: "30%",
                      borderRadius: 2,
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                    onClick={() => handleContinueClick(blog?.url)}
                  >
                    Continue
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
