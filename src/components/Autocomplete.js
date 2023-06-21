import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';

export function SpaceInput({ value, onChange }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <Autocomplete
        disablePortal
        id="space-input"
        options={space}
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} label="Space" />}
        freeSolo
      />
      <FormHelperText>Required</FormHelperText>
    </Box>
  );
}


const space = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
];