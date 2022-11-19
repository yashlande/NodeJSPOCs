import { Box } from '@mui/material';
import React from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function AuthSignup() {
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
        <SignupForm />
      </Box>
    </Box>
  );
}

export default AuthSignup;
