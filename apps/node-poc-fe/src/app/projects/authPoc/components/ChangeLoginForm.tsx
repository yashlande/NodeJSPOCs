import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ChangeLoginForm() {
  const nevigate=useNavigate();
  const [loginForm, setLoginForm] = useState({ pwd: '', confirmPwd: '' });

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
        name="pwd"
        id="login"
        label="Email Address"
        value={loginForm.pwd}
        onChange={handleFormChange}
        size="small"
      />
      <TextField
        fullWidth
        name="confirmPwd"
        id="password"
        label="Confirm Password"
        value={loginForm.confirmPwd}
        onChange={handleFormChange}
        size="small"
      />
      <Button variant="contained" color="primary" fullWidth>
        Change Password
      </Button>
    </Box>
  );
}

export default ChangeLoginForm;
