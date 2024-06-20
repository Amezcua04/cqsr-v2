import {
  Box,
  Container,
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
            <CampaignIcon sx={{ fontSize: "55px", color: "white" }} />
          </Typography>
          <Typography
            color="white"
            variant="h5"
            fontWeight={700}
            width={185}
            display="flex"
            alignItems="center"
            paddingRight= {!isMobile ? "15px" : undefined}
            borderRight= {!isMobile ? "3px solid #fff" : undefined}
          >
            ¡Servicio de urgencias médicas las 24 horas!
          </Typography>
          {!isMobile ? (
            <Typography color="white" width={230} display="flex" alignItems="center">
              Atención médica oportuna, profesional y ética las 24 horas del
              día, los 365 días del año.
            </Typography>
          ) : undefined}
        </Stack>
      </Container>
    </Box>
  );
};

export default BrandUrgencias;
