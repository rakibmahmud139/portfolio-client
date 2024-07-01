import "./App.css";
import Banner from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Box } from "@mui/material";
import bannerImage from "../src/assets/18309220_SL-043021-42650-18.jpg";

function App() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bannerImage})`, // Update this to use the correct URL syntax
          backgroundSize: "cover", // Add this line to cover the whole box
        }}
      >
        <Navbar />
        <Banner />
      </Box>
    </Box>
  );
}

export default App;
