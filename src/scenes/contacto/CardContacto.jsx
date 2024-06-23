import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ImagenContacto from "../../assets/Contacto/contacto.png";
import { contactos } from "../../data/data";

const Contacto = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 4 },
        pb: { xs: 4 },
      }}
    >
      <Box display="flex" alignItems="center"></Box>
      <Grid container spacing={2} justifyContent="center" flexDirection={isMobile ? "column" : "row"}>
        <Grid item xs={12} md={6} flexBasis="35% !important">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            bgcolor="blue"
            color="white"
            borderRadius="5px"
            marginBottom="15px"
          >
            <Box display="flex">
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="h6">(311) 211 9470</Typography>
            </Box>
            <Box display="flex">
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="h6">(311) 214 0083</Typography>
            </Box>
          </Box>
          <List>
          <ListItem sx={{ color: "#06C7F9"}}>
          <ListItemText primary="Área" />
          <Typography>Extensión</Typography>
          </ListItem>
            {contactos.map((contacto, index) => (
              <ListItem key={index} sx={{ color: "#18246B"}}>
                <ListItemText primary={contacto.area} />
                <Typography>{contacto.extension}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img
              src={ImagenContacto}
              alt="Contacto"
              style={{ width: "100%", maxWidth: "380px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacto;
