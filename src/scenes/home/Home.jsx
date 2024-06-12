import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <Box
      id="Home"
      sx={(theme) => ({
        width: '100%',
        backgroundImage: 'linear-gradient(180deg, #9BE7FA, #FFF)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
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
        
      </Container>
    </Box>
  );
}