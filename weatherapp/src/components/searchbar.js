import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Searchbar = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={cities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Cities" />}
    />
  )
}

export default Searchbar;

const cities = [
    { label: 'Andhra Pradesh'},
    { label: 'Bangalore', year: 1972 },
    { label: 'Delhi', year: 1974 },
    { label: 'Kolkata', year: 2008 },
    { label: 'Mumbai', year: 1957 },
    { label: "Pune", year: 1993 }, 
  ];
