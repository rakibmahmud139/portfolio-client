import { Navbar } from "../components/Navbar";
import Footer from "./Footer";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Link,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetSingleProjectsQuery } from "../redux/features/projectApi";

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: project } = useGetSingleProjectsQuery(id);

  return (
    <Box sx={{ bgcolor: "#1f1f38" }}>
      <Container>
        <Box py={4}>
          <Typography variant="h4" align="center" color="#FF8F00">
            {project?.data?.projectTitle}
          </Typography>
          <Grid container spacing={4} mt="48px">
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt={project?.data?.projectTitle}
                  height="324px"
                  image={project?.data?.projectImage}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "324px" }}>
                <CardContent>
                  <Typography variant="h6">Description</Typography>
                  <Typography variant="body2" paragraph>
                    {project?.data?.description}
                  </Typography>
                  <Typography variant="h6">
                    Technologies Used (Frontend)
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {project?.data?.usedTechnologiesFrontend.join(", ")}
                  </Typography>
                  <Typography variant="h6">
                    Technologies Used (Backend)
                  </Typography>
                  <Typography variant="body2" paragraph>
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
