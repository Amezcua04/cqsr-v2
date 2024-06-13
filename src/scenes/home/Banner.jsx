import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        // backgroundColor: 'transparent',
        color: 'black',
        textAlign: 'center',
        paddingTop: '20px ',
        width: "100%",
      }}
    >
      <Container>
        <Typography variant="h2" component="h2" gutterBottom>
          Welcome to Our Website
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          We provide the best services for you.
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default Banner;
