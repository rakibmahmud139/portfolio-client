import { Box, IconButton, Container } from "@mui/material";
import {
  Home,
  Person,
  List,
  Star,
  Favorite,
  Book,
  FileCopy,
} from "@mui/icons-material";

export const Navbar = () => {
  const icons = [
    { icon: <Home />, selected: true },
    { icon: <Person />, selected: false },
    { icon: <List />, selected: false },
    { icon: <Star />, selected: false },
    { icon: <Favorite />, selected: false },
    { icon: <Book />, selected: false },
    { icon: <FileCopy />, selected: false },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(40, 44, 52, 0.5)",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          zIndex: "1",
          bottom: 48,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(30, 30, 47, 0.02)",
          borderRadius: "20px",
          padding: "10px 20px",
          boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.8)",
          margin: "0 auto",
          width: "fit-content",
        }}
      >
        {icons.map((item, index) => (
          <IconButton
            key={index}
            sx={{
              margin: "0 10px",
              color: item.selected ? "#0af" : "#ccc",
              backgroundColor: item.selected ? "#0af1" : "transparent",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: item.selected
                  ? "#0af1"
                  : "rgba(255, 255, 255, 0.1)",
                color: "#0af",
              },
              padding: "12px",
              transition: "all 0.3s",
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>
    </Container>
  );
};
