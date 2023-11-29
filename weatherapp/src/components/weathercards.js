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
    <div style={{ marginRight:'34 px', display: 'grid' ,gridTemplateColumns: 'repeat(6, 1fr)', gap: '22px', marginTop: 70, marginX: 'auto' }}>

      <Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={'center'} gutterBottom>
            <br />
          </Typography>
        
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:2}}>
      <br />
    </Box>
        
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', textAlign: 'center', marginTop: '70px', gap: '22px'}}>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>

        
      </Box>
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
        
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', textAlign: 'center', marginTop: '30px', gap: '22px'}}>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>

        
      </Box>
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
        
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', textAlign: 'center', marginTop: '30px', gap: '22px'}}>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>

        
      </Box>
        </CardContent>
        </Card><Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={'center'} gutterBottom>
          Date

          </Typography>
          <Box sx={{ marginTop:2,display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <WbSunnyOutlinedIcon sx={{ fontSize: 56 /* Adjust the size as needed */ }} />
    </Box>
        
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', textAlign: 'center', marginTop: '30px', gap: '22px'}}>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>

        
      </Box>
        </CardContent>
        </Card><Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={'center'} gutterBottom>
          Date

          </Typography>
          <Box sx={{ marginTop:2,display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <WbSunnyOutlinedIcon sx={{ fontSize: 56 /* Adjust the size as needed */ }} />
    </Box>
        
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', textAlign: 'center', marginTop: '30px', gap: '22px'}}>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>

        
      </Box>
        </CardContent>
        </Card><Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}}>
        
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={'center'} gutterBottom>
          Date

          </Typography>
          <Box sx={{ marginTop:2,display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <WbSunnyOutlinedIcon sx={{ fontSize: 56 /* Adjust the size as needed */ }} />
    </Box>
        
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', textAlign: 'center', marginTop: '30px', gap: '22px'}}>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>
        <Typography>1</Typography>

        
      </Box>
        </CardContent>
        </Card>

         

    </div> 



  )
}

export default Weathercards;
