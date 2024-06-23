import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function Cards({ titulo, subtitulo, url, width, image, etiqueta, onClick }) {
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
      }}
    >
      <Card
        sx={{
          width: { width },
          height: 300,
          display: "flex",
          flexDirection: "column",
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
          <img src={image} alt="imagen" loading="lazy" height="100px" />
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
              variant="h5"
              component="div"
              align={"center"}
              color="secondary"
            >
              {titulo}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"justify"}
            >
              {subtitulo}
            </Typography>
          </div>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#194AC1" }}
            onClick={onClick}
          >
            {etiqueta ? etiqueta : "Más información"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
