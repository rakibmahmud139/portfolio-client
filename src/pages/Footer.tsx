import { Box, Typography } from "@mui/material";

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
            RakibHosen- © 2025 All Rights Reserved
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
