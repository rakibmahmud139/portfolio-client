import "./App.css";
import Banner from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Box } from "@mui/material";
import bannerImage from "../src/assets/18309220_SL-043021-42650-18.jpg";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

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
      <Skills />
      <Contact />
    </Box>
  );
}

export default App;
