import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
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
import { useGetAllProjectsQuery } from "../redux/features/projectApi";
import { TProject } from "../types";

AOS.init();

const Project = () => {
  const { data: projects } = useGetAllProjectsQuery({});

  const handleDemo = (link: string) => {
    window.open(link, "_blank");
  };

  const handleCode = (code: string) => {
    window.open(code, "_blank");
  };

  return (
    <div id="project" style={{ paddingTop: "96px" }}>
      <Typography
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-easing="linear"
        component="h1"
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "48px",
          color: "#FF8F00",
          fontFamily: "sans-serif",
        }}
      >
        Recent Projects
      </Typography>
      <Container>
        <Grid container spacing={4}>
          {projects?.data?.map((project: TProject) => (
            <Grid key={project?._id} item xs={12} md={4}>
              <Card
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="linear"
                sx={{
                  borderRadius: 2,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "transform 0.5s",
                  boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.8)",
                  overflow: "hidden",
                  "&:hover": {
                    backgroundColor: "#1f1f38",
                    border: "2px solid #FF8F00",
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={project?.projectImage}
                  alt="projectImg"
                  sx={{
                    width: "24rem",
                    height: "16rem",
                    borderRadius: 2,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "serif" }}
                  >
                    {project?.projectTitle}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    endIcon={<OpenInNewIcon />}
                    variant="contained"
                    onClick={() => handleDemo(project?.liveLink)}
                    sx={{
                      bgcolor: "#FF8F00",
                      mt: 2,
                      ml: 2,
                      mb: 1,
                      width: "33%",
                      borderRadius: 2,
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        bgcolor: "#FF8F00",
                      },
                    }}
                  >
                    Demo
                  </Button>
                  <Button
                    endIcon={<GitHubIcon />}
                    variant="outlined"
                    color="primary"
                    onClick={() => handleCode(project?.repositoryURL)}
                    sx={{
                      mt: 2,
                      ml: 2,
                      mb: 1,
                      width: "33%",
                      borderRadius: 2,
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    Code
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<ArrowCircleRightIcon />}
                    sx={{
                      bgcolor: "#939185",
                      mt: 2,
                      ml: 2,
                      mb: 1,
                      width: "33%",
                      borderRadius: 2,
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        bgcolor: "#939185",
                      },
                    }}
                  >
                    <a
                      href={`/project/${project?._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      Details
                    </a>
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

export default Project;
