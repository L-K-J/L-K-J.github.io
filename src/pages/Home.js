import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom';
import { FreqSelect, MonthSelect } from '../components/Select';
import { SpaceInput } from '../components/Autocomplete';

export function Home() {
    const navigate = useNavigate();
    const [selectedSpace, setSelectedSpace] = React.useState('');
    const [selectedFreq, setSelectedFreq] = React.useState('');
    const [selectedMonth, setSelectedMonth] = React.useState('');

    const handleClick = () => {
        // Navigate to the next page when the button is clicked
        navigate('/main');
        console.log(selectedSpace)
        console.log(selectedFreq)
        console.log(selectedMonth)
    };

    const handleSpaceChange = (event, value) => {
        setSelectedSpace(value);
    };
    const handleFreqChange = (event) => {
        setSelectedFreq(event.target.value);
    };
    const handleMonthChange = (value) => {
        setSelectedMonth(value);
    };


    return (
        <div className="Home">
            <Container maxWidth="sm">
                <Box sx={{ marginBottom: '16px', textAlign: 'center' }}>
                    <Typography variant="h6" component="h1" sx={{ width: '100%' }}>
                        Checklist Inspection Tool
                    </Typography>
                    <Typography variant="h6" component="h2" sx={{ width: '100%' }}>
                        Settings
                    </Typography>
                </Box>
                <Box sx={{ marginBottom: '16px' }}>
                    <SpaceInput value={selectedSpace} onChange={handleSpaceChange} />
                </Box>
                <Grid container spacing={2} alignItems="center" sx={{ marginBottom: '16px' }}>
                    <Grid item xs={7}>
                        <FreqSelect value={selectedFreq} onChange={handleFreqChange} />
                    </Grid>
                    <Grid item xs={5}>
                        <MonthSelect value={selectedMonth} onChange={handleMonthChange}  />
                    </Grid>
                </Grid>
                <Box>
                    <Button fullWidth variant="contained" onClick={handleClick}>SUBMIT</Button>
                </Box>
            </Container>
        </div>
    );
}
