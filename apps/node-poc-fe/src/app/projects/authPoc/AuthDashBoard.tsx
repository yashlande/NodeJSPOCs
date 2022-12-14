import { Box, Typography } from '@mui/material';
import React from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

function AuthDashboard() {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Header />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
       <Typography variant='h4'>Dashboard</Typography>
      </Box>
    </Box>
  );
}

export default AuthDashboard;
