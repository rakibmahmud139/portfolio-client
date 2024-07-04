import { Box, Container, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { useGetAllSkillsQuery } from "../redux/features/skillApi";
import { TSkill } from "../types";

const Skills = () => {
  const { data: skills } = useGetAllSkillsQuery({});

  return (
    <Box sx={{ mt: "72px" }}>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "32px",
          color: "#373A40",
        }}
      >
        Professional Skills
      </Typography>
      <Container>
        <Marquee
          gradient
          gradientWidth={100}
          gradientColor="#1f1f38"
          pauseOnHover
        >
          <Box
            sx={{
              width: "100%",
              mt: 3,
              display: "flex",
              boxShadow: "0 px 6px 0 #373A40",
              gap: "64px",
              textAlign: "center",
              py: 6,
              px: {
                xs: 3,
                sm: 0,
              },
            }}
          >
            {skills?.data?.map((skill: TSkill) => (
              <Box
                key={skill._id}
                sx={{
                  transition: "transform 0.5s",
                  py: 1,
                  px: 4,
                  ml: 6,
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  boxShadow: `0 4px 8px 0 ${skill.bgColor}, 0 6px 12px 0 ${skill.bgColor}`,
                }}
              >
                <img
                  src={skill?.image}
                  alt={skill?.skillName}
                  style={{ width: "5rem", margin: "0 auto" }}
                />
                <Typography sx={{ mt: 2 }}>{skill?.skillName}</Typography>
              </Box>
            ))}
          </Box>
        </Marquee>
      </Container>
    </Box>
  );
};

export default Skills;
