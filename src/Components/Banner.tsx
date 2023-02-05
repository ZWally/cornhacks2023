import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { AccountCircle, Home } from '@mui/icons-material';
import { useAuthContext } from '../Contexts/Authorization';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  const { firebaseUser, siteUser } = useAuthContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Home /> 
          </IconButton>
        </Link>
        <Typography variant="h6">
          AccessGenie
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