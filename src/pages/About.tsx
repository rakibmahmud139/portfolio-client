import { Box, Container, Typography } from "@mui/material";
import bannerImage from "../assets/836584_file.svg";
import fullStackImg from "../assets/computer.png";
import frontEndImg from "../assets/front-end_8167797.png";
import backEndImg from "../assets/web-development_8389752.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const services = [
  {
    title: "Full Stack",
    bgColor: "#9BCF53",
    icon: fullStackImg,
    describe:
      "Comprehensive web development services that cover both front-end and back-end technologies.",
  },
  {
    title: "Front End",
    bgColor: "#6AD4DD",
    icon: frontEndImg,
    describe:
      "Specializing in creating visually appealing and user-friendly interfaces. ",
  },
  {
    title: "Back End",
    bgColor: "#E49BFF",
    icon: backEndImg,
    describe:
      "Focused on building robust and scalable server-side applications. ",
  },
];

const About = () => {
  return (
    <div id="about">
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            pt: "48px",
            pb: "48px",
          }}
        >
          <Box>
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
              About Me
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="linear"
              sx={{
                textAlign: "center",
                px: { md: "64px" },
                color: "#fff",
                marginBottom: "32px",
                fontFamily: "serif",
              }}
            >
              Hi, I am Rakib Mahmud. A passionate web developer with a knack for
              crafting dynamic and user-friendly web experiences. I thrive on
              turning creative ideas into functional, aesthetically pleasing
              websites and web applications. I love coding. I am interested in
              learning new technology. I believe that no one can be successful
              without hard work and dedication. I want to join a professional
              life to gain exposure, confidence, and a sense of achievement.
            </Typography>

            <Typography
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="linear"
              component="h1"
              variant="h5"
              sx={{
                textAlign: "center",
                px: "64px",
                color: "#FF8F00",
                marginBottom: "32px",
                fontFamily: "sans-serif",
              }}
            >
              Services I Offer
            </Typography>
            <Container maxWidth="lg">
              <Box
                sx={{
                  textAlign: "center",
                  display: { xs: "block", md: "flex" },
                  justifyContent: "space-evenly",
                }}
              >
                {services?.map((service) => (
                  <Box
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    key={service?.title}
                    sx={{
                      p: "16px",
                      background: service?.bgColor,
                      borderRadius: "24px",
                      mb: { xs: "24px" },
                      boxShadow: "0 16px 24px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.5s",
                      "&:hover": {
                        border: "2px solid #FF8F00",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <img src={service?.icon} alt="fullStackImg" width="32px" />
                    <Typography
                      component="h1"
                      variant="h6"
                      sx={{ color: "#373A40" }}
                    >
                      {service?.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#686D76",
                        width: "200px",
                        mx: "auto",
                        fontFamily: "serif",
                      }}
                    >
                      {service?.describe}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default About;
