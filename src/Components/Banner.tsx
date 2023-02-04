import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { AccountCircle, Home } from '@material-ui/icons';

interface BannerProps {
  username: string;
}

const Banner: React.FC<BannerProps> = ({ username }) => (
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
        {username}
      </Typography>
      <IconButton color="inherit">
        <AccountCircle />
      </IconButton>
    </Toolbar>
  </AppBar>
);


export default Banner;