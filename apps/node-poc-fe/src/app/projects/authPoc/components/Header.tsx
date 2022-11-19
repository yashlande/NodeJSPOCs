import React from 'react';
import { Box, Typography } from '@mui/material';

function Header() {
  return (
    <Box sx={{ width: '100%', height: '50px', display: 'flex', background:'#9c27b0' }}>
      <Typography sx={{color:'white'}} variant="h4">Authentication Project</Typography>
    </Box>
  );
}

export default Header;
