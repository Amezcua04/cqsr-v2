import { Box, Typography, useMediaQuery } from "@mui/material";
import imagen from "../../assets/Home/Recurso 7.webp";

const BrandLeyenda = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      display="flex"
      mt="15px"
      flexDirection={isMobile ? "column" : "row"}
      justifyContent="center"
    >
      <Box
        display={isMobile ? "contents" : undefined}
        alignContent="center"
        align="center"
        color="#18246B"
        height="inherit"
        sx={{
          width: "50%",
        }}
      >
        <Typography variant={isMobile ? "h4" : "h2"} fontWeight={700}>
          Somos más que un hospital
        </Typography>
        <Typography variant="h5" textAlign="justify" width={350}>
          Con experiencia de más de 32 años, somos especialistas en brindar un
          trato humano, con la calidez y calidad que cada uno de nuestros
          pacientes necesita, ayudándoles en la recuperación de su bienestar.
        </Typography>
      </Box>
      <Box
        component="img"
        src={imagen}
        alt="Banner"
        loading="lazy"
        alignSelf="center"
        height={isMobile ? "100%" : "310px"}
        ml={isMobile ? "0" : "100px"}
        sx={{
          width: "100%",
          objectFit: "fill",
        }}
      />
    </Box>
  );
};

export default BrandLeyenda;
