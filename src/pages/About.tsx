import { Box, Container, Typography } from "@mui/material";
import bannerImage from "../assets/836584_file.svg";
import fullStackImg from "../assets/computer.png";
import frontEndImg from "../assets/front-end_8167797.png";
import backEndImg from "../assets/web-development_8389752.png";

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
      <Box
        sx={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: "96px",
          pb: "72px",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "rgba(179, 200, 207, 0.8)",
            borderRadius: "24px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            pt: "48px",
            pb: "48px",
          }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                textAlign: "center",
                marginBottom: "48px",
                color: "#FF8F00",
              }}
            >
              About Me
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                px: { md: "64px" },
                color: "#686D76",
                marginBottom: "32px",
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
              component="h1"
              variant="h4"
              sx={{
                textAlign: "center",
                px: "64px",
                color: "#373A40",
                marginBottom: "32px",
              }}
            >
              Education
            </Typography>
            <Box
              sx={{
                textAlign: "center",
                mb: "64px",
                border: "2px solid #373a40",
                p: "8px",
              }}
            >
              <Typography sx={{ fontSize: "24px", color: "#373a40" }}>
                Bachelor Of Business Administration(BBA) in Accounting(Honours)
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#373a40" }}>
                Comilla Victoria Govt. Collage
              </Typography>
            </Box>

            <Typography
              component="h1"
              variant="h5"
              sx={{
                textAlign: "center",
                px: "64px",
                color: "#FF8F00",
                marginBottom: "32px",
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
                      sx={{ color: "#686D76", width: "200px", mx: "auto" }}
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
