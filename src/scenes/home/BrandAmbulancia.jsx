import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Ambulancia from "../../assets/Home/Recurso 17.png";

const BrandAmbulancia = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  
  const items = [
    {
      text: "Traslados programados locales y foráneos",
    },
    {
      text: "Urgencias Avanzadas",
    },
    {
      text: "Cuidados Intensivos",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "23vh" : "45vh",
        marginTop: "32px",
        overflow: "hidden",
        backgroundColor: "#18246B",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: isMobile ? "400px" : "100%",
          height: "100%",
          paddingLeft: 0,
        }}
      >
        <Box display="flex" flexDirection="row">
          <Box
            alignContent="center"
            align="center"
            color="white"
            height="inherit"
            sx={{
              width: "50%",
            }}
          >
            <Typography variant={isMobile ? "h6" : "h2"} fontWeight={700}>Servicio de Ambulancia</Typography>
            <List>
            {items?.map((item, index) => (
              <ListItem key={index} sx={{ alignItems: "baseline"}}>
                <ListItemIcon style={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon
                    sx={{ fontSize: "10px", color: "white" }}
                  />
                </ListItemIcon>
                <Typography variant={isMobile ? "body2" : "h4"} fontSize={isMobile ? "12px" : undefined }>{item.text}</Typography>
                  
              </ListItem>
            ))}
            </List>
          </Box>
          <Box
            component="img"
            src={Ambulancia}
            alt="Banner"
            loading="lazy"
            height={isMobile ? "100%" : "310px"}
            sx={{
              width: "50%",
              objectFit: "fill",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BrandAmbulancia;
