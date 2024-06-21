import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react'

const CardMedico = ({ especialista }) => {
    const isMobile = useMediaQuery("(max-width:600px)")
  return (
    <Grid
      item
      xs={6}
      sm={3}
      md={3}
      lg={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingLeft: "0 !important",
        maxWidth: "100% !important"
      }}
    >
      <Card
        sx={{
          height: 300,
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <CardMedia
          sx={{
            height: 110,
            objectFit: "contain",
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
          }}
          title="imagen"
        >
          <img src={especialista.imagen} alt="imagen" height="100px" />
        </CardMedia>
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              gutterBottom
              variant={isMobile ? "h6" : "h5"}
              component="div"
              align={"center"}
              color="secondary"
            >
              {especialista.nombre}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"justify"}
            >
              {especialista.especialidad}
            </Typography>
          </div>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            fullWidth
            variant="contained"
            href="#"
            sx={{ bgcolor: "#194AC1" }}
          >
            Más información
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardMedico;