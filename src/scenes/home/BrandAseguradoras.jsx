import { Box, Button, Paper, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Aseguradora1 from "../../assets/A1.png";
import Aseguradora2 from "../../assets/A2.png";
import Aseguradora3 from "../../assets/A3.png";
import Item from "./Item";

const BrandAseguradoras = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  var items = [
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
      <Carousel>
        {items.map((item, i) => (
          <Paper key={i}>
            <Box
              component="img"
              src={item.url}
              alt="aseguradora"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Paper>
        ))}
      </Carousel>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Typography
          bgcolor="#194AC1"
          color="white"
          width={isMobile ? 350 : 700}
          borderRadius={5}
          textAlign="center"
          variant={isMobile ? undefined : "h4"}
        >
          Utiliza tu seguro de gastos médicos mayores con nosotros
        </Typography>
      </Box>
    </Box>
  );
};

export default BrandAseguradoras;
