import { Box, Container, IconButton, Link, Stack, Typography } from "@mui/material";

import Logo from "../assets/logo.png";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramInIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/X";

import Mapa from "./Mapa";

const logoStyle = {
  width: "100px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" mt={1}>
      {"© "}
      Centro Quirurgico San Rafael. Todos los Derechos Reservados&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2, sm: 4 },
          py: { xs: 4, sm: 3 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <Box sx={{ ml: "-15px" }}>
                <img src={Logo} style={logoStyle} alt="logo of sitemark" />
              </Box>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                "Nuestra prioridad es tu bienestar."
              </Typography>
              <Box sx={{ width: "250px", textAlign: "justify" }}>
                <Typography variant="caption" color="text.secondary" mb={2} fontSize={14}>
                  En Centro Quirúrgico San Rafael estamos preparados para tu
                  atención médica las 24 horas, los 365 días del año,
                  respaldados por un equipo de médicos profesionales altamente
                  capacitados y equipo de última tecnología.
                </Typography>
              </Box>
            </Box>
          </Box>
          
          
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              Ubicación
            </Typography>
            <Mapa />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 2, sm: 4 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Link color="text.secondary" href="/">
              Inicio
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" href="/servicios">
              Servicios
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" href="/especialidades">
              Especialidades
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" href="/salud365">
              Salud365
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" href="/contacto">
              Contacto
            </Link>
            <Copyright />
          </div>
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: "secondary",
            }}
          >
            <IconButton
              color="inherit"
              href="https://www.facebook.com/SanRafaelCQ"
              aria-label="GitHub"
              sx={{ alignSelf: "center" }}
            >
              <FacebookIcon />
            </IconButton>
            {/* <IconButton
              color="inherit"
              href="/"
              aria-label="X"
              sx={{ alignSelf: "center" }}
            >
              <TwitterIcon />
            </IconButton> */}
            <IconButton
              color="inherit"
              href="https://www.instagram.com/sanrafaelcq/"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
            >
              <InstagramInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
