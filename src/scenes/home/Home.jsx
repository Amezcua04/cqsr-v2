import { Box, Container, Typography } from "@mui/material";
import Banner from "./Banner";
import imageUrlDesktop from "../../assets/Banners inicio desktop.png";
import imageUrlMobile from "../../assets/Banners inicio mobile.png";

export default function Home() {
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
            pt: { xs: 12 },
          }}
        >
          {/* Elementos centrados */}
          <Typography variant="h1">Inicio</Typography>
        </Container>
      </Container>
    </Box>
  );
}
