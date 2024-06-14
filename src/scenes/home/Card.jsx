import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards({ titulo, subtitulo, url, width, image }) {
  return (
    <Card sx={{ width: {width}, height: 300, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        sx={{ height: 110, objectFit: "contain", display: "flex", justifyContent: "center", paddingTop: "10px" }}
        title="imagen"
      >
        <img 
          src={image}
          height='100px'
        />
      </CardMedia>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Typography gutterBottom variant="h5" component="div" align={"center"} color="secondary">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={"justify"}>
            {subtitulo}
          </Typography>
        </div>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button fullWidth variant="contained" href={url} sx={{ bgcolor: '#194AC1'}}>Más información</Button>
      </CardActions>
    </Card>
  );
}
