import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar({
  isLoggedIn
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            Recommendation&trade;
          </Typography>
          {/* TODO add light and dark toggle */}
          {!isLoggedIn && <Button color="inherit">Login</Button>}
          {!isLoggedIn && <Button color="inherit">Register</Button>}
          {isLoggedIn && <Button color="inherit">Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
