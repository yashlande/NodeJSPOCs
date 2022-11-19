import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

function ForgotPassword() {
  const nevigate=useNavigate();
  const [email, setEmail] = useState('');

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };
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
        <Box
          sx={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Typography sx={{ color: 'black' }} variant="h6">
            Forgot Password
          </Typography>
          <TextField
            label="Enter Email Address"
            value={email}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" fullWidth>
            Send Email
          </Button>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography
              sx={{ color: 'blue', cursor: 'pointer' }}
              onClick={() => nevigate('/auth/login')}
            >
              Back to Login
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
