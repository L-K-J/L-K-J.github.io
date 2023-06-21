import React from 'react';
import { Box, IconButton, Grid } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const importAll = (r) => {
    return r.keys()
        .filter((path) => path.includes('image') && path.endsWith('.jpg'))
        .map(r);
};

const images = importAll(require.context('../images', false, /\.jpg$/));

export function ImageCarousel() {
    const [currentImage, setCurrentImage] = React.useState(0);

    const handlePrevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    return (
        <Grid container spacing={2} alignItems="center" sx={{ marginBottom: '16px' }}>
            <Grid item xs={12}>
                <Box height="25vh" display="flex" alignItems="center" justifyContent="center" position="relative">
                    <IconButton onClick={handlePrevImage} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
                        <ArrowBackIos />
                    </IconButton>
                    <Box
                        height="80%"
                        width="80%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                    >
                        <img
                            src={images[currentImage]}
                            alt={`${currentImage + 1}`}
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                        />
                    </Box>
                    <IconButton onClick={handleNextImage} sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
                        <ArrowForwardIos />
                    </IconButton>
                </Box>
            </Grid>
            <Grid item xs={12} mt={-3}>
                <Box display="flex" justifyContent="center">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            style={{
                                height: '10px',
                                width: '10px',
                                borderRadius: '50%',
                                margin: '0 5px',
                                backgroundColor: currentImage === index ? 'black' : 'lightgray',
                            }}
                        />
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
}

