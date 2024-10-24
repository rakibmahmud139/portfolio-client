import { Box, Container, Grid, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { useGetAllSkillsQuery } from "../redux/features/skillApi";
import { TSkill } from "../types";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Skills = () => {
  const { data: skills } = useGetAllSkillsQuery({});

  return (
    <div id="skill" style={{ marginTop: "96px" }}>
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
        Professional Skills
      </Typography>
      <Container>
        <Box>
          <Grid container spacing={2}>
            {skills?.data?.map((skill: TSkill) => (
              <Grid item xs={12} sm={6} md={2} key={skill._id}>
                <Box
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                  sx={{
                    border: "1px solid #FF8F00",
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                    padding: 2,
                    boxShadow: "0px 4px 10px rgba(255, 143, 0, 0.5)",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                >
                  <img
                    src={skill?.image}
                    alt={skill?.skillName}
                    style={{ width: "24px" }}
                  />
                  <Typography sx={{ fontFamily: "serif", color: "#fff" }}>
                    {skill?.skillName}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Skills;

{
  /* <Box
  sx={{
    border: "1px solid #FF8F00",
    px: "18px",
    borderRadius: "16px",
  }}
>
  <Typography
    sx={{
      color: "#fff",
      fontSize: "24px",
      textAlign: "center",
    }}
  >
    Frontend
  </Typography>
</Box>; */
}
