import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useGetAllProjectsQuery } from "../redux/features/projectApi";
import { TProject } from "../types";

const Blog = () => {
  const { data: projects } = useGetAllProjectsQuery({});

  return (
    <div id="blog" style={{ marginTop: "96px" }}>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#FF8F00",
          mb: "48px",
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
          {projects?.data?.map((project: TProject) => (
            <Grid key={project?._id} item xs={12} md={6}>
              <Card
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
                  image={project?.projectImage}
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
                      }}
                    >
                      July 19, 2022
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        background: "#E0F7FA",
                        padding: "0.3rem 0.5rem",
                        borderRadius: 1,
                      }}
                    >
                      Design
                    </Typography>
                  </Box>
                  <Typography variant="h6" component="div" mb={2}>
                    {project?.projectTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed
                    Do Eiusmod Tempor Incididunt Ut Labore.
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
                  >
                    Details
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
