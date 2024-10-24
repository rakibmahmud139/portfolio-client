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
    <Box sx={{ padding: "20px", color: "#fff", mt: "96px" }}>
      <Typography
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
        component="h1"
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#FF8F00",
          mb: "48px",
          fontFamily: "sans-serif",
        }}
      >
        Education
      </Typography>
      <Timeline position="alternate">
        {/* BSC in Civil Engineering */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              BBA IN ACCOUNTING - CUMILLA VICTORIA GOVT COLLAGE, CUMILLA
            </Typography>
            <Typography variant="body1" sx={{ color: "#a0a0a0" }}>
              2024 - Present
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Diploma in Civil Engineering */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              HIGHER SECONDARY CERTIFICATE - CUMILLA VICTORIA GOVT COLLAGE,
              CUMILLA
            </Typography>
            <Typography variant="body1" sx={{ color: "#a0a0a0" }}>
              (GPA: 5.00 out of 5.00)
            </Typography>
            <Typography variant="body2" sx={{ color: "#a0a0a0" }}>
              I've successfully completed my hsc from business studies
              department with a good GPA as 5.00 out of 5.00.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Secondary School Certificate */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              SECONDARY SCHOOL CERTIFICATE - SHARIFPUR SHAJEDUL HIGH SCHOOL,
              CUMILLA
            </Typography>
            <Typography variant="body1" sx={{ color: "#a0a0a0" }}>
              (GPA: 4.78 out of 5.00)
            </Typography>
            <Typography variant="body2" sx={{ color: "#a0a0a0" }}>
              I've completed my school education from the Business studies
              department at this school.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default Education;
