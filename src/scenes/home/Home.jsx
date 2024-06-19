import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Banner from "./Banner";
import Cards from "../../components/Card";
import BrandUrgencias from "./BrandUrgencias";
import BrandAseguradoras from "./BrandAseguradoras";
import BrandAmbulancia from "./BrandAmbulancia";
import Slide from "./Slide";
import imageUrlDesktop from "../../assets/Home/Banners inicio desktop.png";
import imageUrlMobile from "../../assets/Home/Banners inicio mobile.png";
import { dataHome, itemsHome } from "../../data/data";
import React from "react";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        // backgroundImage: "linear-gradient(180deg, #9BE7FA, #FBFBFB)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
        mb: { xs: "5px", sm: "10px" },
        overflow: "auto",
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
            {dataHome.map((item, index) => (
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
          <Slide items={itemsHome} />
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
};

export default Home;
