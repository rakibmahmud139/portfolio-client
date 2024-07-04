import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import { useGetSingleProjectsQuery } from "../redux/features/projectApi";
import Footer from "./Footer";
import "aos/dist/aos.css";

AOS.init();

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: project } = useGetSingleProjectsQuery(id);

  return (
    <Box sx={{ bgcolor: "#1f1f38" }}>
      <Container>
        <Box py={4}>
          <Typography
            align="center"
            color="#FF8F00"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontFamily: "sans-serif",
            }}
          >
            {project?.data?.projectTitle}
          </Typography>
          <Grid container spacing={4} mt="48px">
            <Grid item xs={12} md={6}>
              <Card
                data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                <CardMedia
                  component="img"
                  alt={project?.data?.projectTitle}
                  height="400px"
                  image={project?.data?.projectImage}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
                sx={{ height: "400px" }}
              >
                <CardContent>
                  <Typography variant="h6">Description</Typography>
                  <Typography variant="body2" color="#686D76" paragraph>
                    {project?.data?.description}
                  </Typography>
                  <Typography variant="h6">
                    Technologies Used (Frontend)
                  </Typography>
                  <Typography variant="body2" color="#686D76" paragraph>
                    {project?.data?.usedTechnologiesFrontend.join(", ")}
                  </Typography>
                  <Typography variant="h6">
                    Technologies Used (Backend)
                  </Typography>
                  <Typography variant="body2" color="#686D76" paragraph>
                    {project?.data?.usedTechnologiesBackend.join(", ")}
                  </Typography>
                  <Typography variant="h6">Links</Typography>
                  <Typography variant="body2">
                    <Link
                      href={project?.data?.liveLink}
                      target="_blank"
                      rel="noopener"
                      sx={{ textDecoration: "none", color: "blue" }}
                    >
                      Live Site
                    </Link>

                    <Link
                      href={project?.data?.repositoryURL}
                      target="_blank"
                      rel="noopener"
                      sx={{ textDecoration: "none", mx: "24px", color: "blue" }}
                    >
                      Client Repo
                    </Link>

                    <Link
                      href={project?.data?.backEndGitHubLink}
                      target="_blank"
                      rel="noopener"
                      sx={{ textDecoration: "none", color: "blue" }}
                    >
                      Server Repo
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ProjectDetails;
