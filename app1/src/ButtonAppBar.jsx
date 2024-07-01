import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  const baseUrl= window.location.origin;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1}}>
            Single Spa Web App
          </Typography>
          <Button variant="contained" color='secondary' href={baseUrl + "/app2"}>Vue Example</Button>
          <Button variant="contained" color='secondary' href={baseUrl + "/app3"}>Angular Example</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}