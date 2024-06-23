import { Box, Container, Typography } from "@mui/material";
import CardContacto from "./CardContacto";

const Contacto = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // backgroundImage: "linear-gradient(180deg, #9BE7FA, #FBFBFB)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
        mb: { xs: "5px", sm: "10px" },
        overflow: "auto",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 15 },
          maxWidth: "100% !important",
          pl: "0 !important",
          pr: "0 !important",
        }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            width: "100%",
            color: "white",
            backgroundColor: "#06C7F9",
          }}
        >
          Contacto
        </Typography>
      </Container>
      <CardContacto />
    </Box>
  );
};

export default Contacto;
