import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function ValidationRadioGroup() {
    const [selectedValue, setSelectedValue] = React.useState('a');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button',
      inputProps: { 'aria-label': item },
    });

    return (
        <FormControl>
            <FormLabel id="validation-radio-buttons-label">Validation</FormLabel>
            <RadioGroup
                row
                aria-labelledby="validation-radio-buttons-label"
                name="validation-radio-buttons"
            >
                <FormControlLabel value="Pass" control={<Radio {...controlProps('a')} color="success"/>} label="Pass" />
                <FormControlLabel value="Fail" control={<Radio {...controlProps('b')} color="error"/>} label="Fail" />
            </RadioGroup>
        </FormControl>
    );
}