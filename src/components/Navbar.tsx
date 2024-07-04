import { Home, Person } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import { Box, Container, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-scroll";
import blogSvg from "../assets/blog-solid-svgrepo-com (2).svg";
import experienceSvg from "../assets/experience.png";
import projectSvg from "../assets/project-14px-fill-arrow-svgrepo-com.svg";

export const Navbar = () => {
  const icons = [
    {
      title: "Home",
      to: "home",
      icon: <Home />,
      selected: false,
    },
    {
      title: "About Me",
      to: "about",
      icon: <Person />,
      selected: false,
    },
    {
      title: "Skill",
      to: "skill",
      icon: <img src={experienceSvg} alt="skill" width="20px" />,
      selected: false,
    },
    {
      title: "Contact Me",
      to: "contact",
      icon: <CallIcon />,
      selected: false,
    },
    {
      title: "Project",
      to: "project",
      icon: <img src={projectSvg} alt="project" width="20px" />,
      selected: false,
    },
    {
      title: "Blog",
      to: "blog",
      icon: <img src={blogSvg} alt="blog" width="20px" />,
      selected: false,
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(40, 44, 52, 0.5)",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          zIndex: "1",
          bottom: 48,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(30, 30, 47, 0.70)",
          borderRadius: "20px",
          boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.8)",
          margin: "0 auto",
          width: "fit-content",
        }}
      >
        {icons.map((item, index) => (
          <Tooltip key={index} title={item.title}>
            <IconButton
              sx={{
                margin: "0 10px",
                color: item.selected ? "#FF8F00" : "#ccc",
                backgroundColor: item.selected ? "#0af1" : "transparent",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: item.selected
                    ? "#0af1"
                    : "rgba(255, 255, 255, 0.1)",
                  color: "#FF8F00",
                },
                padding: { xs: "2px", md: "12px" },
                transition: "all 0.3s",
              }}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="active"
              >
                {item.icon}
              </Link>
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Container>
  );
};
