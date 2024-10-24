import { Box } from "@mui/material";
import bannerImage from "../src/assets/18309220_SL-043021-42650-18.jpg";
import "./App.css";
import Banner from "./components/Banner";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import Footer from "./pages/Footer";
import Education from "./pages/Education";

function App() {
  return (
    <Box sx={{ bgcolor: "#1f1f38" }}>
      <Navbar />
      <Box>
        <Banner />
      </Box>
      <About />
      <Project />
      <Skills />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
