import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { Box, IconButton, Typography } from "@mui/material";
import projectSvg from "../assets/project-14px-fill-arrow-svgrepo-com.svg";
import experienceSvg from "../assets/experience.png";
import blogSvg from "../assets/blog-solid-svgrepo-com (2).svg";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: "#393E46",
        color: "#fff",
        py: 4,
        px: 2,
        mt: "96px",
      }}
    >
      {/* <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{ borderBottom: "2px solid #fff" }}
        pb={4}
      >
        <Box>
          <Box>
            <Box>
              <IconButton
                component="a"
                href="/"
                color="inherit"
                sx={{ mx: 1, display: "inline-flex", alignItems: "center" }}
              >
                <HomeIcon sx={{ mr: 1, fontSize: "24px" }} />
              </IconButton>
              <IconButton
                href="#"
                color="inherit"
                sx={{ mx: 1, display: "inline-flex", alignItems: "center" }}
              >
                <PersonIcon sx={{ mr: 1, fontSize: "24px" }} />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                color="inherit"
                sx={{ mx: 1, display: "inline-flex", alignItems: "center" }}
              >
                <CallIcon sx={{ mr: 1, fontSize: "24px" }} />
              </IconButton>
              <IconButton>
                <a href="https://www.facebook.com/ishan.mahmud.9849/">
                  <img src={blogSvg} alt="facebook" width="24px" />
                </a>{" "}
              </IconButton>
              <IconButton>
                <a href="https://www.linkedin.com/in/rakib-mahmud-0b7159278/">
                  <img
                    src={experienceSvg}
                    alt="linkedin"
                    width="24px"
                    style={{ marginLeft: "24px", marginRight: "24px" }}
                  />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://www.instagram.com/rakib_mahmud_2/">
                  <img src={projectSvg} alt="instagram" width="24px" />
                </a>{" "}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box> */}
      <Box
        sx={{
          display: { md: "flex" },
          justifyContent: "space-between",
          mt: { xs: "12px" },
          textAlign: { xs: "center" },
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{ mb: { xs: "12px", fontFamily: "serif" } }}
          >
            RakibMahmud- © 2025 All Rights Reserved
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" sx={{ fontFamily: "serif" }}>
            Terms of Service - Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
