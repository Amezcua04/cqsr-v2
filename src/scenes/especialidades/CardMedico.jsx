import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const CardMedico = ({ especialista }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
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
        maxWidth: "100% !important",
      }}
    >
      <Card
        sx={{
          height: 300,
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", lg: "90%" },
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
          <img
            src={especialista.imagen}
            loading="lazy"
            alt="imagen"
            height="100px"
          />
        </CardMedia>
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingBottom: "0",
          }}
        >
          
            <Typography
              gutterBottom
              variant={isMobile ? "h6" : "h5"}
              component="div"
              align={"center"}
              color="secondary"
            >
              {especialista.nombre}
            </Typography>
          
        </CardContent>
        <CardActions sx={{ display: "grid", justifyContent: "center" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
          >
            DGPE: {especialista.DGPE}
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" ml="0 !important">
            <Typography
              variant="h6"
              color="white"
              textAlign={"center"}
              sx={{
                backgroundColor: "#194AC1",
                borderRadius: "10px",
                width: {xs: "150px", lg: "200px" },
                fontSize: {xs: "11px"},
                marginLeft: "0 !important",
              }}
            >
              {especialista.especialidad}
            </Typography>
            <Typography
              variant="h6"
              color="white"
              textAlign={"center"}
              width="230px"
              sx={{
                backgroundColor: "#06C7F9",
                borderRadius: "10px",
                margin: "5px 0 !important",
                width: {xs: "150px", lg: "200px" },
                fontSize: {xs: "11px"},
              }}
            >
              {especialista.subespecialidad}
            </Typography>
          </Box>
          <a
            href="tel:3112119470"
            style={{ textDecoration: "none", display: "contents" }}
          >
            <Button variant="text" startIcon={<PhoneEnabledIcon />} sx={{ padding: {xs: "6px 8px", lg: "10px 8px"} }}>
              {especialista.telefono}
            </Button>
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardMedico;
