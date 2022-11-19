import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const nevigate=useNavigate();
  const [signupForm, setSignupForm] = useState({ userName: '',email:'', pwd: '' });

  const handleFormChange = (e: any) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
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
        Register
      </Typography>
      <TextField
        fullWidth
        name="userName"
        id="login"
        label="Email Address"
        value={signupForm.userName}
        onChange={handleFormChange}
        size="small"
      />
      <TextField
        fullWidth
        name="email"
        id="mail"
        label="Enter Email"
        value={signupForm.email}
        onChange={handleFormChange}
        size="small"
      />
      <TextField
        fullWidth
        name="pwd"
        id="password"
        label="Password"
        value={signupForm.pwd}
        onChange={handleFormChange}
        size="small"
      />
      <Button variant="contained" color="primary" fullWidth>
        Register
      </Button>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography sx={{ color: 'blue', cursor: 'pointer' }} onClick={()=>nevigate('/auth/login')}>
          Back to Login
        </Typography>
      </Box>
    </Box>
  );
}

export default SignupForm;
