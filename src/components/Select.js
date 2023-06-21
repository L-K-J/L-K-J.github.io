import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

const frequencies = [
  { value: 1, label: 'Monthly' },
  { value: 2, label: 'Quarterly' },
  { value: 3, label: 'Half-Yearly' },
  { value: 4, label: 'Yearly' },
];

const months = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

export function FreqSelect({ value, onChange }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="freq-select-label">Inspection Frequency</InputLabel>
        <Select
          labelId="freq-select-label"
          id="freq-select"
          value={value}
          label="Inspection Frequency"
          onChange={onChange}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200, // Adjust the maximum height as needed
              },
            },
          }}
        >
          {frequencies.map((frequency) => (
            <MenuItem key={frequency.value} value={frequency.value}>
              {frequency.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormHelperText>Required</FormHelperText>
    </Box>
  );
}

export function MonthSelect({ value, onChange }) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  React.useEffect(() => {
    if (!value) {
      onChange(currentMonth);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="month-select-label">Month</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={value || currentMonth}
          label="Month"
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200, // Adjust the maximum height as needed
              },
            },
          }}
        >
          {months.map((month) => (
            <MenuItem key={month.value} value={month.value}>
              {month.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormHelperText>Optional</FormHelperText>
    </Box>
  );
}
