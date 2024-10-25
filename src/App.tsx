import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Footer from "./pages/Footer";

function App() {
  return (
    <Box sx={{ bgcolor: "#1f1f38" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
