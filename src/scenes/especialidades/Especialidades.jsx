import { Box, Container, Typography } from '@mui/material';
import Especialistas from './Especialistas';

const Especialidades = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
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
            color: "#194AC1",
          }}
        >
          Directorio Médico
        </Typography>

        {/* Contenido */}
        <Especialistas />
      </Container>
    </Box>
  );
};

export default Especialidades