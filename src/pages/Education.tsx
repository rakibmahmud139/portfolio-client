import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";

const Education = () => {
  return (
    <Box
      sx={{
        padding: { xs: "16px", sm: "20px", md: "40px" },
        color: "#fff",
        mt: { xs: "48px", sm: "72px", md: "96px" },
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
          color: "#FF8F00",
          mb: { xs: "32px", sm: "40px", md: "48px" },
          fontFamily: "sans-serif",
          fontSize: { xs: "24px", sm: "28px", md: "32px" },
        }}
      >
        Education
      </Typography>
      <Timeline position="alternate">
        {/* BBA in Accounting */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
              }}
            >
              BBA IN ACCOUNTING - CUMILLA VICTORIA GOVT COLLAGE, CUMILLA
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#a0a0a0",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
            >
              2024 - Present
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Higher Secondary Certificate */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
              }}
            >
              HIGHER SECONDARY CERTIFICATE - CUMILLA VICTORIA GOVT COLLAGE,
              CUMILLA
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#a0a0a0",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
            >
              (GPA: 5.00 out of 5.00)
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#a0a0a0",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
            >
              I've successfully completed my HSC from the Business Studies
              department with a GPA of 5.00 out of 5.00.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Secondary School Certificate */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
              }}
            >
              SECONDARY SCHOOL CERTIFICATE - SHARIFPUR SHAJEDUL HIGH SCHOOL,
              CUMILLA
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#a0a0a0",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
            >
              (GPA: 4.78 out of 5.00)
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#a0a0a0",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
            >
              I've completed my school education from the Business Studies
              department at this school.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default Education;
