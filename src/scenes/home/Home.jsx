import { Box, Container, Typography } from '@mui/material';
import Banner from './Banner';

export default function Home() {
  return (
    <Box
      id="Home"
      sx={{
        width: '100%',
        backgroundImage: 'linear-gradient(180deg, #9BE7FA, #FFF)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        mb: { xs: 14, sm: 20 },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 12},
          // pb: { xs: 8, sm: 12 },
        }}
      >
        <Banner />
        <Typography variant="h1">
          Inicio
        </Typography>
      </Container>
    </Box>
  );
}
