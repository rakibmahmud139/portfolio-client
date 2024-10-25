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
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

AOS.init();

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: project } = useGetSingleProjectsQuery(id);

  return (
    <Box sx={{ bgcolor: "#1f1f38" }}>
      <Container>
        <Box sx={{ pt: "8px" }}>
          <Box
            component="img"
            src={project?.data?.projectImage}
            alt="Blog"
            sx={{
              width: "100%",
              borderRadius: "16px",
              height: { xs: "200px", sm: "350px", md: "500px" }, // Responsive height
            }}
          />
        </Box>
        <Typography
          sx={{ fontSize: { md: 28, xs: 20 }, textAlign: { md: "center" } }}
          mb={2}
          mt={2}
          color="#FF8F00"
          fontWeight={96}
        >
          {project?.data?.projectTitle}
        </Typography>
        <Box
          sx={{ pl: { md: "16px", sm: "2px", xs: "2px" } }}
          pr={8}
          gap={16}
          mt={5}
          alignItems="center"
        >
          <Box>
            <Typography
              sx={{ fontSize: { md: 28, xs: 20 } }}
              mb={2}
              color="#FF8F00"
              fontWeight={96}
            >
              Frontend Technologies
            </Typography>
          </Box>
          <Box>
            <Typography color="#FFF">
              {project?.data?.usedTechnologiesFrontend.join(", ")}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ pl: { md: "16px", sm: "2px", xs: "2px" } }}
          pr={8}
          gap={16}
          mt={5}
          alignItems="center"
        >
          <Box>
            <Typography
              sx={{ fontSize: { md: 28, xs: 20 } }}
              mb={2}
              color="#FF8F00"
              fontWeight={96}
            >
              Backend Technologies
            </Typography>
          </Box>
          <Box>
            <Typography color="#FFF">
              {project?.data?.usedTechnologiesBackend.join(", ")}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ pl: { md: "16px", sm: "2px", xs: "2px" } }}
          pr={8}
          gap={16}
          mt={5}
          alignItems="center"
        >
          <Box>
            <Typography
              sx={{ fontSize: { md: 28, xs: 20 } }}
              mb={2}
              color="#FF8F00"
              fontWeight={96}
            >
              Description
            </Typography>
          </Box>
          <Box>
            <Typography color="#FFF">{project?.data?.description}</Typography>
          </Box>
        </Box>
        <Box
          sx={{ pl: { md: "16px", sm: "2px", xs: "2px" } }}
          pr={8}
          gap={16}
          mt={5}
          alignItems="center"
        >
          <Box>
            <Typography
              sx={{ fontSize: { md: 28, xs: 20 } }}
              mb={2}
              color="#FF8F00"
              fontWeight={96}
            >
              Links
            </Typography>
          </Box>
          <Box>
            <Typography
              color="#fff"
              sx={{ display: { md: "flex", sm: "flex", gap: 20 } }}
            >
              <Link
                href={project?.data?.liveLink}
                target="_blank"
                rel="noopener"
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  fontFamily: "serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Live Site <OpenInNewIcon sx={{ fontSize: "16px" }} />
              </Link>

              <Link
                href={project?.data?.repositoryURL}
                target="_blank"
                rel="noopener"
                sx={{
                  textDecoration: "none",
                  mx: { md: "24px" },
                  color: "#fff",
                  fontFamily: "serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Client Repo <GitHubIcon sx={{ fontSize: "16px" }} />
              </Link>

              <Link
                href={project?.data?.backEndGitHubLink}
                target="_blank"
                rel="noopener"
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  fontFamily: "serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Server Repo <GitHubIcon sx={{ fontSize: "16px" }} />
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
