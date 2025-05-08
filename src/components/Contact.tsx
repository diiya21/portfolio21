import React from 'react';
import { Box, Typography, Paper, Link } from '@mui/material';
import { Email, Phone, LinkedIn } from '@mui/icons-material';

function Contact() {
  return (
    <div id="contact" className="container" style={{ padding: '4rem 2rem' }}>
      <Box sx={{ maxWidth: 1000, margin: '0 auto' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            fontSize: '2.5rem',
            mb: 2,
            textAlign: 'left',
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          Contact Me
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mb: 4,
            textAlign: 'left',
            fontFamily: "'Segoe UI', sans-serif",
            lineHeight: 2,
          }}
        >
          I'm currently open to freelance, internship, or full-time opportunities.
          Feel free to reach out via any of the following methods - 
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            maxWidth: 600,
            backgroundColor: '#f9f9f9',
          }}
        >
          <Box display="flex" alignItems="center" mb={3}>
            <Phone sx={{ mr: 2, color: '#1976d2' }} />
            <Typography variant="body1" sx={{ fontFamily: "'Segoe UI', sans-serif", color: '#222' }}>
              +1 (604) 388-7422
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={3}>
            <Email sx={{ mr: 2, color: '#1976d2' }} />
            <Typography variant="body1" sx={{ fontFamily: "'Segoe UI', sans-serif", color: '#222' }}>
              diyasharma2183@gmail.com
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <LinkedIn sx={{ mr: 2, color: '#1976d2' }} />
            <Link
              href="https://www.linkedin.com/in/diyasharma2183"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
              variant="body1"
              sx={{
                wordBreak: 'break-all',
                fontFamily: "'Segoe UI', sans-serif",
                color: '#222',
              }}
            >
              linkedin.com/in/diyasharma2183
            </Link>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default Contact;
