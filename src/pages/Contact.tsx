import emailjs from "@emailjs/browser";
import CallIcon from "@mui/icons-material/Call";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { toast } from "sonner";
import emailImg from "../assets/email-svgrepo-com.svg";
import fbImg from "../assets/facebook-svgrepo-com.svg";
import instImg from "../assets/instagram-svgrepo-com.svg";
import linkImg from "../assets/linkedin-svgrepo-com.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_o3dq5d8",
          "template_3qq1e9x",
          form.current,
          "RdTJ8ZFSxqUbTMjPS"
        )
        .then(
          () => {
            toast.success("Email has been sent😍");
            form.current?.reset();
            console.log("SUCCESS!");
          },
          (error: any) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div
      id="contact"
      style={{
        marginTop: "96px",
      }}
    >
      <Typography
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
        component="h1"
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "48px",
          color: "#FF8F00",
          fontFamily: "sans-serif",
        }}
      >
        Contact Me
      </Typography>
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="space-evenly"
          justifyItems="center"
          alignContent="center"
        >
          <Grid item xs={12} md={5}>
            <Typography
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
              component="h1"
              variant="h5"
              color="#FF8F00"
              sx={{ fontFamily: "sans-serif" }}
            >
              Get In Touch
            </Typography>
            <Box
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
              display="flex"
              alignItems="center"
              color="#fff"
              gap={2}
              mt={6}
            >
              <EmailRoundedIcon sx={{ mr: 1, fontSize: "24px" }} />
              <Box>
                <Typography sx={{ fontFamily: "serif" }}>Talk To Me</Typography>
                <Typography sx={{ fontFamily: "serif" }}>
                  hasansaikat74@gamil.com
                </Typography>
              </Box>
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
              display="flex"
              alignItems="center"
              color="#fff"
              gap={2}
              mt={2}
            >
              <CallIcon sx={{ mr: 1, fontSize: "24px" }} />
              <Box>
                <Typography sx={{ fontFamily: "serif" }}>Call Me</Typography>
                <Typography sx={{ fontFamily: "serif" }}>
                  +8801961928243
                </Typography>
              </Box>
            </Box>
            <Typography
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
              component="h6"
              color="#FF8F00"
              mt={6}
              sx={{ fontFamily: "sans-serif" }}
            >
              FOLLOW ME
            </Typography>
            <Box
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <a href="https://www.facebook.com/ishan.mahmud.9849/">
                <FacebookRoundedIcon sx={{ color: "#fff", fontSize: "24px" }} />
              </a>
              <a href="https://www.linkedin.com/in/rakib-mahmud-0b7159278/">
                <LinkedInIcon
                  sx={{ color: "#fff", fontSize: "24px", my: "12px" }}
                />
              </a>
              <a href="https://www.instagram.com/rakib_mahmud_2/">
                <InstagramIcon sx={{ color: "#fff", fontSize: "24px" }} />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              ref={form}
              onSubmit={sendEmail}
              sx={{
                display: "grid",
                gap: "20px",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },
              }}
            >
              <TextField
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
                required
                label="First Name"
                size="small"
                fullWidth
                name="from_name"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff", // default border color
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff", // input text color
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff", // label color
                  },
                }}
              />
              <TextField
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
                label="Last Name"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff", // default border color
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff", // input text color
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff", // label color
                  },
                }}
              />
              <TextField
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
                required
                label="Email"
                size="small"
                fullWidth
                name="from_email"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff", // default border color
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff", // input text color
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff", // label color
                  },
                }}
              />
              <TextField
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
                label="Phone"
                size="small"
                fullWidth
                name="from_phone"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff", // default border color
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff", // input text color
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff", // label color
                  },
                }}
              />
              <TextField
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
                required
                label="Message"
                name="message"
                size="small"
                multiline
                rows={4}
                sx={{
                  gridColumn: { xs: "1 / -1", sm: "1 / -1" },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff", // default border color
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff", // input text color
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff", // label color
                  },
                }}
                fullWidth
              />
              <Button
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
                variant="contained"
                type="submit"
                sx={{
                  gridColumn: "1 / -1",
                  background: "#FF8F00",
                  "&:hover": {
                    transform: "scale(1.05)",
                    bgcolor: "#FF8F00",
                  },
                }}
                fullWidth
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
