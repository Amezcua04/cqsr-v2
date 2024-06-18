import { Box, Button, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Aseguradora1 from "../../assets/A1.png";
import Aseguradora2 from "../../assets/A2.png";
import Aseguradora3 from "../../assets/A3.png";

const BrandAseguradoras = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const items = [
    {
      url: Aseguradora1,
    },
    {
      url: Aseguradora2,
    },
    {
      url: Aseguradora3,
    },
  ];

  return (
    <Box sx={{ marginTop: "32px" }}>
      <Typography
        color="#06C7F9"
        variant="h4"
        fontSize={isMobile ? "17px" : "48px"}
        textAlign="center"
      >
        Trabajamos en equipo con las mejores aseguradoras{" "}
        <span style={{ color: "#18246B" }}>nacionales e internacionales</span>
      </Typography>

      {/* CAROUSEL */}
      <Carousel
        navButtonsAlwaysVisible={!isMobile}
        sx={{ marginTop: isMobile ? "10px" : "30px" }}
      >
        {items.map((item, i) => (
          <Box
            component="img"
            src={item.url}
            key={i}
            alt="Banner"
            height={isMobile ? "100px" : "200px"}
            sx={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        ))}
      </Carousel>

      <Box display="flex" justifyContent="center" marginTop="15px">
        <Typography variant={isMobile ? undefined : "h6"}>
          ¡Si no encuentras tu aseguradora, comunicate con nosotros!
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" marginTop="15px">
        <Typography
          bgcolor="#194AC1"
          color="white"
          width={isMobile ? 350 : 700}
          borderRadius={2}
          textAlign="center"
          variant={isMobile ? undefined : "h4"}
        >
          Utiliza tu seguro de gastos médicos mayores con nosotros
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" marginTop="10px">
        <Button variant="contained" sx={{ bgcolor: "#194AC1" }}>
          más detalles
        </Button>
      </Box>
    </Box>
  );
};

export default BrandAseguradoras;
