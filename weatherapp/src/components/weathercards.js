import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
 

const Weathercards = () => {
  return (
    <div style={{ margin: '0 20px', display: 'grid' ,gridTemplateColumns: 'repeat(6, 1fr)', gap: '22px', marginTop: 70, marginX: 'auto' }}>

      <Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={'center'} gutterBottom>
            Word of the Day
          </Typography>
        
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
        
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={'center'} gutterBottom>
            Date
          </Typography>
        
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:2}}>
      <WbSunnyOutlinedIcon sx={{ fontSize: 56 /* Adjust the size as needed */ }} />
    </Box>
        
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={'center'} gutterBottom>
          Date

          </Typography>
          <Box sx={{ marginTop:2,display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <WbSunnyOutlinedIcon sx={{ fontSize: 56 /* Adjust the size as needed */ }} />
    </Box>
        
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
        
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        </Card><Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={'center'} gutterBottom>
          Date

          </Typography>
          <Box sx={{ marginTop:2,display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <WbSunnyOutlinedIcon sx={{ fontSize: 56 /* Adjust the size as needed */ }} />
    </Box>
        
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
        
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        </Card><Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={'center'} gutterBottom>
          Date

          </Typography>
          <Box sx={{ marginTop:2,display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <WbSunnyOutlinedIcon sx={{ fontSize: 56 /* Adjust the size as needed */ }} />
    </Box>
        
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
        
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        </Card><Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={'center'} gutterBottom>
          Date

          </Typography>
          <Box sx={{ marginTop:2,display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <WbSunnyOutlinedIcon sx={{ fontSize: 56 /* Adjust the size as needed */ }} />
    </Box>
        
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
        
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        </Card>

         

    </div> 



  )
}

export default Weathercards;
