import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { dataDetalles } from "../../data/data";

const CardDetalle = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        marginTop: "32px",
        overflow: "hidden",
        backgroundColor: "#194AC1",
      }}
    >
      <Box
        color="white"
        sx={{
          padding: { xs: "1rem", sm: "2rem" },
          textAlign: "center",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Aquí encontrarás un lugar de confort, con la máxima seguridad y
          calidez humana.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {dataDetalles.map((item, index) => (
            <Grid item xs={6} sm={6} md={4} key={index}>
              <Box display="flex" flexDirection="row" justifyContent="center">
                <Box
                  bgcolor="white"
                  borderRadius="50%"
                  padding="5px"
                  alignSelf="center"
                  sx={{
                    width: {xs: "50%", xl:"15%"},
                  }}
                >
                  <img src={item.icono} alt="icono" loading="lazy" width="90%"/>
                </Box>
                <Box pl={1}>
                  <Typography variant="h4" fontWeight={900} textAlign="left" fontSize={45}>
                    {item.cantidad}
                  </Typography>
                  <Typography width="100px" textAlign="left" sx={{ fontSize: {xs: 15, xl: 20}}}>
                    {item.texto}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CardDetalle;
