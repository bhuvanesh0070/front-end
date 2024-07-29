import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'orange' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
          HAVEN VILLAS
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'grey.300',
            color: 'grey.900',
            mx: 1,
            '&:hover': {
              bgcolor: 'grey.400',
            },
          }}
          component={Link}
          to="/login"
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'grey.300',
            color: 'grey.900',
            mx: 1,
            '&:hover': {
              bgcolor: 'grey.400',
            },
          }}
          component={Link}
          to="/register"
        >
          Register
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'grey.300',
            color: 'grey.900',
            mx: 1,
            '&:hover': {
              bgcolor: 'grey.400',
            },
          }}
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'grey.300',
            color: 'grey.900',
            mx: 1,
            '&:hover': {
              bgcolor: 'grey.400',
            },
          }}
          component={Link}
          to="/admin-dashboard"
        >
          Admin
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'grey.300',
            color: 'grey.900',
            mx: 1,
            '&:hover': {
              bgcolor: 'grey.400',
            },
          }}
          component={Link}
          to="/user-dashboard"
        >
          User
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'grey.300',
            color: 'grey.900',
            mx: 1,
            '&:hover': {
              bgcolor: 'grey.400',
            },
          }}
          component={Link}
          to="/about"
        >
          About
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'grey.300',
            color: 'grey.900',
            mx: 1,
            '&:hover': {
              bgcolor: 'grey.400',
            },
          }}
          component={Link}
          to="/contact"
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
