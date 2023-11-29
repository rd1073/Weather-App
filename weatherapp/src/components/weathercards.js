import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


 

const Weathercards = () => {
  return (
    <div style={{ display: 'grid', marginTop:23 ,gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>

      <Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
        </Card><Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
        </Card><Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
        </Card><Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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

         

    </div> 



  )
}

export default Weathercards;
