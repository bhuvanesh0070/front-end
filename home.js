import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import Image from '../../assets/main.png';

const HomePage = () => {
  return (
    <Box
      id="home"
      sx={{
        width: '100%',
        minHeight: '100vh',
        p: 8,
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, white, gray)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row-reverse' },
            alignItems: 'center',
          }}
        >
          <Box sx={{ flex: 1, pr: { md: 8 }, mb: { xs: 4, md: 0 } }}>
            <img
              src={Image}
              alt="Home"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderTopRightRadius: '50%',
                borderBottomLeftRadius: '50%',
              }}
            />
          </Box>
          <Box sx={{ flex: 1, pl: { md: 8 } }}>
            <Typography variant="h3" component="h1" sx={{ color: 'gray.800', mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
              Find Your <span style={{ color: '#1976d2' }}>Dream Home</span>
            </Typography>
            <Typography variant="h6" sx={{ color: 'gray.700', mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
              Welcome to our real estate agency, where finding your dream home is our top priority. Our team of experienced agents is dedicated to providing exceptional service and helping you navigate the complex process of buying or selling a property.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <TextField
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your Email"
                variant="outlined"
                sx={{ bgcolor: 'white', borderRadius: '50px', boxShadow: 3 }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'grey', // Set to grey color
                  color: 'white',
                  borderRadius: '50px',
                  boxShadow: 3,
                  '&:hover': {
                    bgcolor: 'darkgrey', // Hover color for grey
                  },
                  px: 3,
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
