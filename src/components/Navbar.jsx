import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import Logo from "../assets/logo.png";
import Whatsapp from "./Whatsapp";

const logoStyle = {
  width: "50px",
  height: "auto",
  cursor: "pointer",
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const getMenuItemStyle = (path) => {
    return location.pathname === path
      ? { borderBottom: "2px solid", borderColor: "#06C7F9" }
      : {};
  };

  return (
    <div>
      <Whatsapp />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "rgba(24, 36, 107, 0.6)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-10px",
                px: 0,
              }}
            >
              <img
                src={Logo}
                style={logoStyle}
                alt="logo of cqsr"
                loading="lazy"
                onClick={() => navigate("/")}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <MenuItem
                onClick={() => navigate("/")}
                sx={{ py: "6px", px: "12px", ...getMenuItemStyle("/") }}
              >
                <Typography variant="h5" color="neutral">
                  Inicio
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/servicios")}
                sx={{
                  py: "6px",
                  px: "12px",
                  ...getMenuItemStyle("/servicios"),
                }}
              >
                <Typography variant="h5" color="neutral">
                  Servicios
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/medicos")}
                sx={{
                  py: "6px",
                  px: "12px",
                  ...getMenuItemStyle("/medicos"),
                }}
              >
                <Typography variant="h5" color="neutral">
                  Directorio Médico
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/salud365")}
                sx={{ py: "6px", px: "12px", ...getMenuItemStyle("/salud365") }}
              >
                <Typography variant="h5" color="neutral">
                  Membresía Salud365
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/contacto")}
                sx={{ py: "6px", px: "12px", ...getMenuItemStyle("/contacto") }}
              >
                <Typography variant="h5" color="neutral">
                  Contacto
                </Typography>
              </MenuItem>
            </Box>

            {/* Navbar Mobile */}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              {/* Menu Icon */}
              <Button
                variant="text"
                color="neutral"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <MenuItem
                    onClick={() => navigate("/")}
                    sx={{ width: "125px", ...getMenuItemStyle("/") }}
                  >
                    Inicio
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/servicios")}
                    sx={{ width: "125px", ...getMenuItemStyle("/servicios") }}
                  >
                    Servicios
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/medicos")}
                    sx={{
                      width: "125px",
                      ...getMenuItemStyle("/medicos"),
                    }}
                  >
                    Directorio Médico
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/salud365")}
                    sx={{ width: "125px", ...getMenuItemStyle("/salud365") }}
                  >
                    Membresía Salud365
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/contacto")}
                    sx={{ width: "125px", ...getMenuItemStyle("/contacto") }}
                  >
                    Contacto
                  </MenuItem>
                  <Divider />
                  <a href="tel:3112119470" style={{ textDecoration: "none" }}>
                    <Button startIcon={<CallIcon />} variant="contained" fullWidth color="error">
                      URGENCIAS
                    </Button>
                  </a>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
