import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TornadoRoundedIcon from '@mui/icons-material/TornadoRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1  }}>
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <TornadoRoundedIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
          WEATHER 99
        </Typography>
        <HistoryRoundedIcon />
        <Button color="inherit">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
          Refresh
        </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar;




 