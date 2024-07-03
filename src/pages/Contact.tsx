import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Container,
  Button,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import emailImg from "../assets/email-svgrepo-com.svg";
import mobileImg from "../assets/mobile-svgrepo-com.svg";
import fbImg from "../assets/facebook-svgrepo-com.svg";
import instImg from "../assets/instagram-svgrepo-com.svg";
import linkImg from "../assets/linkedin-svgrepo-com.svg";
import { toast } from "sonner";

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
    <Box sx={{ mt: "72px" }}>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "48px",
          color: "#373A40",
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
            <Typography component="h1" variant="h5" color="#373A40">
              Get In Touch
            </Typography>
            <Box display="flex" alignItems="center" gap={2} mt={6}>
              <img src={emailImg} alt="email" width="24px" />
              <Box>
                <Typography>Talk To Me</Typography>
                <Typography>hasansaikat74@gamil.com</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <img src={mobileImg} alt="email" width="24px" />
              <Box>
                <Typography>Call Me</Typography>
                <Typography>+8801961928243</Typography>
              </Box>
            </Box>
            <Typography component="h6" color="#373A40" mt={6} mb={2}>
              FOLLOW ME
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <a href="https://www.facebook.com/ishan.mahmud.9849/">
                <img src={fbImg} alt="facebook" width="24px" />
              </a>
              <a href="https://www.linkedin.com/in/rakib-mahmud-0b7159278/">
                <img
                  src={linkImg}
                  alt="linkedin"
                  width="24px"
                  style={{ marginLeft: "24px", marginRight: "24px" }}
                />
              </a>
              <a href="https://www.instagram.com/rakib_mahmud_2/">
                <img src={instImg} alt="instagram" width="24px" />
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
                required
                label="First Name"
                size="small"
                fullWidth
                name="from_name"
              />
              <TextField label="Last Name" size="small" fullWidth />
              <TextField
                required
                label="Email"
                size="small"
                fullWidth
                name="from_email"
              />
              <TextField
                label="Phone"
                size="small"
                fullWidth
                name="from_phone"
              />
              <TextField
                required
                label="Message"
                name="message"
                size="small"
                multiline
                rows={4}
                sx={{ gridColumn: { xs: "1 / -1", sm: "1 / -1" } }}
                fullWidth
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  gridColumn: "1 / -1",
                  background: "#FF8F00",
                }}
                fullWidth
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
