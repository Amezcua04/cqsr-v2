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
import Logo from "../assets/logo.png";

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
    ? { borderBottom: '2px solid', borderColor: '#06C7F9', width: '125px' } 
    : {};
  };

  return (
    <div>
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
              bgcolor: "rgba(255, 255, 255, 0.4)",
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
              <img src={Logo} style={logoStyle} alt="logo of cqsr" onClick={() => navigate("/")} />
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
                sx={{ py: "6px", px: "12px", ...getMenuItemStyle('/') }}
              >
                <Typography variant="h5" color="text.primary">
                  Inicio
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/servicios")}
                sx={{ py: "6px", px: "12px", ...getMenuItemStyle('/servicios') }}
              >
                <Typography variant="h5" color="text.primary">
                  Servicios
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/especialidades")}
                sx={{ py: "6px", px: "12px", ...getMenuItemStyle('/especialidades') }}
              >
                <Typography variant="h5" color="text.primary">
                  Especialidades
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/salud365")}
                sx={{ py: "6px", px: "12px", ...getMenuItemStyle('/salud365') }}
              >
                <Typography variant="h5" color="text.primary">
                  Salud 365
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/contacto")}
                sx={{ py: "6px", px: "12px", ...getMenuItemStyle('/contacto') }}
              >
                <Typography variant="h5" color="text.primary">
                  Contacto
                </Typography>
              </MenuItem>
            </Box>

            {/* Navbar Mobile */}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              {/* Menu Icon */}
              <Button
                variant="text"
                color="primary"
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
                    sx={getMenuItemStyle('/')}
                  >
                    Inicio
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/servicios")}
                    sx={getMenuItemStyle('/servicios')}
                  >
                    Servicios
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/especialidades")}
                    sx={getMenuItemStyle('/especialidades')}
                  >
                    Especialidades
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/salud365")}
                    sx={getMenuItemStyle('/salud365')}
                  >
                    Salud 365
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/contacto")}
                    sx={getMenuItemStyle('/contacto')}
                  >
                    Contacto
                  </MenuItem>
                  <Divider />
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
