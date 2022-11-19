import { Box } from '@mui/material';
import React from 'react';
import ChangeLoginForm from './components/ChangeLoginForm';
import Header from './components/Header';

function AuthChangeLogin() {
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
        <ChangeLoginForm />
      </Box>
    </Box>
  );
}

export default AuthChangeLogin;
