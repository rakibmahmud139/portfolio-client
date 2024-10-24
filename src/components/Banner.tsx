import { Container, Typography, Box, Button } from "@mui/material";
import avatar from "../assets/2f3f6777-cfb5-4293-bc2c-0f5c4cebe90a-removebg-preview.png";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Banner = () => {
  return (
    <div id="home">
      <Container sx={{ pt: { xs: "16px", sm: "32px", md: "48px" } }}>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="linear"
          >
            <Typography
              sx={{
                color: "#FF8F00",
                fontSize: { xs: "28px", sm: "28px", md: "36px" },
                fontFamily: "sans-serif",
              }}
            >
              Hi, I'm
            </Typography>
            <Typography
              component="h1"
              sx={{
                color: "#fff",
                fontSize: { xs: "28px", sm: "32px", md: "52px" },
                fontFamily: "sans-serif",
              }}
            >
              Rakib Hosen
            </Typography>
            <Typography
              component="h1"
              sx={{
                color: "#fff",
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                fontFamily: "sans-serif",
              }}
            >
              Full Stack Developer
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                mt: "16px",
                width: { xs: "100%", sm: "420px", md: "520px" },
              }}
            >
              A passionate web developer with a knack for crafting dynamic and
              user-friendly web experiences. I thrive on turning creative ideas
              into functional, aesthetically pleasing websites and web
              applications.
            </Typography>
            <Box
              sx={{
                mt: { xs: "24px", sm: "36px", md: "48px" },
                display: "flex",
                justifyContent: { md: "flex-start" },
                gap: "12px",
              }}
            >
              <Link
                to="project"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="active"
              >
                <Button
                  sx={{
                    backgroundColor: "#FF8F00",
                    color: "#fff",
                    textTransform: "none",
                    border: "0px",
                    borderRadius: "20px",
                    padding: "8px 16px",
                    "&:hover": {
                      transform: "scale(1.05)",
                      bgcolor: "#FF8F00",
                    },
                  }}
                >
                  Projects
                </Button>
              </Link>
              <a
                href="https://drive.google.com/file/d/1yxFKpGacopM7aQhlXi71dmYyUNI4Binz/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  sx={{
                    backgroundColor: "#5C636E",
                    color: "#fff",
                    textTransform: "none",
                    border: "0px",
                    borderRadius: "20px",
                    padding: "8px 16px",
                    "&:hover": {
                      transform: "scale(1.05)",
                      bgcolor: "#5C636E",
                    },
                  }}
                >
                  View Resume
                </Button>
              </a>
            </Box>
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="linear"
            sx={{
              mt: { xs: "24px", md: "0" },
              background: "linear-gradient(45deg, #FF8F00, #1E90FF)",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              padding: "20px",
              display: "inline-block",
              overflow: "hidden",
              width: { xs: "100%", md: "auto" },
            }}
          >
            <img
              src={avatar}
              alt="avatar"
              style={{
                maxWidth: "350px",
                width: "auto",
                height: "auto",
                minWidth: "320px",
              }}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
