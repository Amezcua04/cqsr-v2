import { Box, Container, Typography } from '@mui/material';

const Especialidades = () => {
  return (
    <Box
      id="Home"
      sx={{
        width: '100%',
        backgroundImage: 'linear-gradient(180deg, #9BE7FA, #FFF)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        {/* Componentes */}
        <Typography variant='h1'>
          Especialidades
        </Typography>
      </Container>
    </Box>
  );
};

export default Especialidades