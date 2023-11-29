import React from 'react'
import Box from '@mui/system/Box';
import { Typography } from '@mui/material';
import Searchbar from './searchbar';


const City = () => {
  return (
    <Box sx={{ width: '75%', marginTop: 9, marginX: 'auto' /* Center horizontally */ }}>
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' , flexGrow: 1}}>
            <Typography sx={{ fontSize: 'h6.fontSize'}}>
                Andhra Pradesh
            </Typography>
            <Typography sx={{ fontSize: 16}}>
                coordinates
            </Typography>
            </Box>
            <Searchbar />

        </Box>
         
        
    </Box>
  )
}

export default City;
