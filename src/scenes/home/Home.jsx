import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Banner from "./Banner";
import imageUrlDesktop from "../../assets/Banners inicio desktop.png";
import imageUrlMobile from "../../assets/Banners inicio mobile.png";
import Cards from "./Card";

const data = [
  {
    titulo: "Paquete de Maternidad",
    subtitulo:
      "Reciba a su bebé en un espacio totalmente seguro, con la mejor atención las 24 horas.",
    url: "#",
  },
  {
    titulo: "Médicos Especialistas",
    subtitulo:
      "Amplio staff de médicos especialistas dedicados al cuidado de su salud.",
    url: "#",
  },
  {
    titulo: "Servicios Médicos",
    subtitulo:
      "Más de 20 servicios médicos con tecnología de punta a su disposición.",
    url: "#",
  },
  {
    titulo: "Membresía Salud365",
    subtitulo:
      "Nuestra primera membresía de salud con grandes beneficios para toda la familia.",
    url: "#",
  },
];

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(180deg, #9BE7FA, #FFF)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
        mb: { xs: 14, sm: 20 },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 10 },
          maxWidth: "100% !important",
          pl: "0 !important",
          pr: "0 !important",
          // pb: { xs: 8, sm: 12 },
        }}
      >
        <Banner desktopImgSrc={imageUrlDesktop} mobileImgSrc={imageUrlMobile}>
          {/* Elementos encima del banner */}
        </Banner>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 4 },
          }}
        >
          {/* Elementos centrados */}
          <Grid container spacing={2} justifyContent="center">
            {data.map((item, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                <Cards
                  titulo={item.titulo}
                  subtitulo={item.subtitulo}
                  url={item.url}
                  width={isMobile ? "160px" : "225px"}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
