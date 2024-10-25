import Banner from "../components/Banner";
import Contact from "./Contact";
import Skills from "./Skills";
import Project from "./Project";
import Education from "./Education";
import About from "./About";
import Blog from "./Blog";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "#1f1f38" }}>
      <Banner />
      <About />
      <Skills />
      <Project />
      <Education />
      <Blog />
      <Contact />
    </Box>
  );
};

export default Home;
