import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function LoginForm() {
  const [loginForm, setLoginForm] = useState({ userName: '', pwd: '' });

  const handleFormChange = (e: any) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  return (
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
        Login
      </Typography>
      <TextField
        fullWidth
        name="userName"
        id="login"
        label="Email Address"
        value={loginForm.userName}
        onChange={handleFormChange}
        size="small"
      />
      <TextField
        fullWidth
        name="pwd"
        id="password"
        label="Password"
        value={loginForm.pwd}
        onChange={handleFormChange}
        size="small"
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography sx={{ color: 'red', cursor: 'pointer' }}>
          Forgot Password?
        </Typography>
      </Box>
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
      <Typography> OR </Typography>
      <Button variant="contained" color="secondary" fullWidth>
        Sign Up
      </Button>
    </Box>
  );
}

export default LoginForm;
