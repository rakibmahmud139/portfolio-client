import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  "Home",
  "About Me",
  "Experience",
  "Project",
  "Blog",
  "Get In Touch",
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        Rakib{" "}
        <Typography
          component="span"
          sx={{ color: "#FF8F00", fontSize: "24px" }}
        >
          Mahmud
        </Typography>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", mb: "0px" }}>
      <AppBar
        sx={{
          boxShadow: "none",
          borderRadius: "48px",
          mx: "auto",
          mt: "16px",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              color="secondary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuOpenIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "#161719",
              }}
            >
              Rakib{" "}
              <Typography
                component="span"
                sx={{ color: "#FF8F00", fontSize: "24px" }}
              >
                Mahmud
              </Typography>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#161719",
                    textTransform: "none",
                    fontSize: "16px",
                    marginRight: "20px",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <button
                style={{
                  backgroundColor: "#939185",
                  color: "#fff",
                  textTransform: "none",
                  border: "0px",
                  borderRadius: "20px",
                  padding: "8px 16px",
                }}
              >
                Download CV
              </button>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};
