import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";

const BrandUrgencias = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "10vh" : "20vh",
        marginTop: "32px",
        overflow: "hidden",
        backgroundColor: "#d6001c",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: isMobile ? "400px" : "550px",
          height: "100%",
          paddingLeft: 0,
        }}
      >
        <Stack direction="row" spacing={2} textAlign="justify">
          <Typography variant="h5">
            {!isMobile ? <CampaignIcon sx={{ fontSize: "50px", color: "white"}} /> : undefined}
          </Typography>
          <Typography color="white" variant= {!isMobile ? "h5" : undefined } fontSize={isMobile ? "13px" : undefined} fontWeight={700} width={ isMobile ? 150 : 180 }>¡Servicio de urgencias médicas las 24 horas!</Typography>
          <Divider orientation="vertical" flexItem sx={{ color: "neutral" }}/>
          <Typography color="white" fontSize={isMobile ? "9px" : undefined} width={ isMobile ? 150 : 230 }>
            Atención médica oportuna, profesional y ética las 24 horas del día,
            los 365 días del año.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default BrandUrgencias;
