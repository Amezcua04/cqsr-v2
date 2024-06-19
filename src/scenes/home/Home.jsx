import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Banner from "./Banner";
import Cards from "./Card";
import BrandUrgencias from "./BrandUrgencias";
import BrandAseguradoras from "./BrandAseguradoras";
import BrandAmbulancia from "./BrandAmbulancia";
import Slide from "./Slide";
import Maternidad from "../../assets/icons/Maternidad.png";
import Medicos from "../../assets/icons/Medicos.png";
import Servicios from "../../assets/icons/Servicios.png";
import Membresia from "../../assets/icons/Membresia.png";
import imageUrlDesktop from "../../assets/Home/Banners inicio desktop.png";
import imageUrlMobile from "../../assets/Home/Banners inicio mobile.png";
import imagen1 from "../../assets/Home/imagen1.png";
import imagen2 from "../../assets/Home/imagen2.png";
import imagen3 from "../../assets/Home/imagen3.png";
import imagen4 from "../../assets/Home/imagen4.png";
import imagen5 from "../../assets/Home/imagen5.png";
import imagen6 from "../../assets/Home/imagen6.png";

const data = [
  {
    titulo: "Paquete de Maternidad",
    subtitulo:
      "Reciba a su bebé en un espacio totalmente seguro, con la mejor atención las 24 horas.",
    url: "#",
    image: Maternidad,
  },
  {
    titulo: "Médicos Especialistas",
    subtitulo:
      "Amplio staff de médicos especialistas dedicados al cuidado de su salud.",
    url: "#",
    image: Medicos,
  },
  {
    titulo: "Servicios Médicos",
    subtitulo:
      "Más de 20 servicios médicos con tecnología de punta a su disposición.",
    url: "#",
    image: Servicios,
  },
  {
    titulo: "Membresía Salud365",
    subtitulo:
      "Nuestra primera membresía de salud con grandes beneficios para toda la familia.",
    url: "#",
    image: Membresia,
  },
];

const items = [
  {
    url: imagen1,
  },
  {
    url: imagen2,
  },
  {
    url: imagen3,
  },
  {
    url: imagen4,
  },
  {
    url: imagen5,
  },
  {
    url: imagen6,
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
        mb: { xs: "5px", sm: "10px" },
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
            pt: { xs: 2 },
            pb: { xs: 2 },
          }}
        >
          <Grid container spacing={2} justifyContent="center" ml="0">
            {data.map((item, index) => (
              <Cards
                key={index}
                titulo={item.titulo}
                subtitulo={item.subtitulo}
                url={item.url}
                width={isMobile ? "160px" : "225px"}
                image={item.image}
              />
            ))}
          </Grid>
        </Container>
        {/* Detalles */}

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Slide items={items} />
        </Container>
        <BrandAmbulancia />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 2 },
            pb: { xs: 2 },
          }}
        >
          <BrandAseguradoras />
        </Container>
        <BrandUrgencias />
      </Container>
    </Box>
  );
}
