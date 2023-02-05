import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { AccountCircle, Home } from '@mui/icons-material';
import { useAuthContext } from '../Contexts/Authorization';

const Banner: React.FC = () => {
  const { firebaseUser, siteUser } = useAuthContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Home />
        </IconButton>
        <Typography variant="h6">
          Permissions Manager Pro
        </Typography>
        <Typography style={{ flexGrow: 1 }} />
        <Typography variant="subtitle1">
          {firebaseUser?.displayName}
        </Typography>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};


export default Banner;