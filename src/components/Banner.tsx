import { Container, Typography, Box } from "@mui/material";
import avatar from "../assets/2f3f6777-cfb5-4293-bc2c-0f5c4cebe90a-removebg-preview.png";

const Banner = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: { xs: "16px", sm: "32px", md: "64px" } }}
    >
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#FF8F00",
              fontSize: { xs: "24px", sm: "28px", md: "36px" },
            }}
          >
            Hi,
          </Typography>
          <Typography
            component="h1"
            sx={{
              color: "#fff",
              fontSize: { xs: "28px", sm: "32px", md: "48px" },
            }}
          >
            I'm Rakib Mahmud
          </Typography>
          <Typography
            component="h1"
            sx={{
              color: "#fff",
              fontSize: { xs: "24px", sm: "32px", md: "48px" },
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
              justifyContent: { xs: "center", md: "flex-start" },
              gap: "12px",
            }}
          >
            <button
              style={{
                backgroundColor: "#FF8F00",
                color: "#fff",
                textTransform: "none",
                border: "0px",
                borderRadius: "20px",
                padding: "8px 16px",
              }}
            >
              Projects
            </button>
            <button
              style={{
                backgroundColor: "#5C636E",
                color: "#fff",
                textTransform: "none",
                border: "0px",
                borderRadius: "20px",
                padding: "8px 16px",
              }}
            >
              Get In Touch
            </button>
          </Box>
        </Box>
        <Box sx={{ mt: { xs: "24px", md: "0" } }}>
          <img
            src={avatar}
            alt="avatar"
            style={{
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              minWidth: "320px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Banner;
