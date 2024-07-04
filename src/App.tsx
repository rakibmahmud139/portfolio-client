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

function App() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Banner />
      </Box>
      <About />
      <Box>
        <Project />
      </Box>
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
