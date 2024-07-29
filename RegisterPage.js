import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/7.png';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/login'); 
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box
          bgcolor="rgba(255, 255, 255, 0.8)"
          padding={3}
          borderRadius={2}
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Registration Page
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              label="Name"
              type="text"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: 'grey',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'darkgrey',
                  },
                }}
              >
                Register
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterPage;
