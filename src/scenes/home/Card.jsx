import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Maternidad from "../../assets/example.png";

export default function Cards({ titulo, subtitulo, url, width }) {
  return (
    <Card sx={{ width: {width}, height: 300, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        sx={{ height: 110, objectFit: "contain" }}
        image={Maternidad}
        title="maternidad"
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Typography gutterBottom variant="h5" component="div" align={"center"}>
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={"justify"}>
            {subtitulo}
          </Typography>
        </div>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button fullWidth variant="contained" href={url}>Más información</Button>
      </CardActions>
    </Card>
  );
}
