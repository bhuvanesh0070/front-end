import React from 'react';
import { Container, Box, Typography, TextField, Button, Grid, SvgIcon } from '@mui/material';
import { styled } from '@mui/system';
const ContactUs = () => {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: 'grey.100',
        width: '100%',
        minHeight: '100vh',
        p: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box py={16} px={{ xs: 4, sm: 6, lg: 8 }}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                If you have any questions or would like to schedule a consultation with one of our real estate experts, please don't hesitate to contact us.
              </Typography>
              <Box>
                <ContactDetail icon="home" text="1234 Main St, Anytown USA 12345" />
                <ContactDetail icon="phone" text="(123) 456-7890" />
                <ContactDetail icon="email" text="info@example.com" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="form" action="#" method="POST" display="grid" gap={2}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Phone"
                  name="phone"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  InputLabelProps={{ shrink: true }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: 'grey',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'darkgrey',
                    },
                    mt: 2,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const ContactDetail = ({ icon, text }) => {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <SvgIcon sx={{ mr: 1, color: 'grey' }}>
        <path d={getIconPath(icon)} />
      </SvgIcon>
      <Typography variant="body1" color="textSecondary">
        {text}
      </Typography>
    </Box>
  );
};

const getIconPath = (icon) => {
  switch (icon) {
    case 'home':
      return 'M12 3L2 12h3v7h14v-7h3L12 3z';
    case 'phone':
      return 'M6.62 10.79a15.478 15.478 0 006.59 6.59l2.2-2.2a1 1 0 011.17-.12 11.401 11.401 0 003.71 1.21 1 1 0 01.87 1V20a1 1 0 01-1 1 15.001 15.001 0 01-13-13 1 1 0 011-1h2.5a1 1 0 011 1 11.401 11.401 0 001.21 3.71 1 1 0 01-.12 1.17l-2.2 2.2z';
    case 'email':
      return 'M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-8 9L4 7h16l-8 6zm-8 6V8.68l7.21 5.4a1 1 0 001.58 0L20 8.67V19H4z';
    default:
      return '';
  }
};

export default ContactUs;
