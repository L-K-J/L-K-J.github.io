import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom';
import './Main.css';

import { TextFieldsDetails, TextFieldsID } from '../components/TextField';
import { ValidationRadioGroup } from '../components/RadioGroup';
import { ImageCarousel } from '../components/ImageCarousel';
import { ImageUpload } from '../components/Button';

export function Main() {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the next page when the button is clicked
        navigate('/');
    };

    return (
        <div className="Main">
            <Container maxWidth="sm">
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" component="h1" sx={{ width: '100%' }}>
                        Checklist Inspection Tool
                    </Typography>
                    <Typography variant="h6" component="h1" sx={{ width: '100%' }}>
                        Main
                    </Typography>
                </Box>
                <Box sx={{ marginBottom: '16px', textAlign: 'center' }}>
                    <ImageCarousel></ImageCarousel>
                    <ImageUpload></ImageUpload>
                </Box>
                <Grid container spacing={2} alignItems="center" sx={{ marginBottom: '16px' }}>
                    <Grid item xs={6}>
                        <TextFieldsID></TextFieldsID>
                    </Grid>
                    <Grid item xs={6}>
                        <ValidationRadioGroup></ValidationRadioGroup>
                    </Grid>
                </Grid>
                <Box sx={{ marginBottom: '16px', textAlign: 'center' }}>
                    <TextFieldsDetails></TextFieldsDetails>
                </Box>
                <Grid container spacing={2} alignItems="center" sx={{ marginBottom: '16px' }}>
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained" onClick={handleClick} color="error">EXIT</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained" onClick={handleClick} color="success">SAVE</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}