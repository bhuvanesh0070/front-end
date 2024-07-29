import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import houseImage from '../../assets/3.png'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace this with your actual login logic
    if (email === 'user@example.com' && password === 'password') {
      console.log('Login successful');
      navigate('/');
    } else {
      console.log('Invalid credentials');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${houseImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
            Login
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
            <Box mt={2} display="flex" flexDirection="column" width="100%">
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
                Login
              </Button>
              <Box mt={1} display="flex" justifyContent="space-between">
                <Link component="button" variant="body2" onClick={handleForgotPassword}>
                  Forgot Password?
                </Link>
                <Link component="button" variant="body2" onClick={handleRegister}>
                  New User? Register
                </Link>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
