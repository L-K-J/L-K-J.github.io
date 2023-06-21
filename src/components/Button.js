import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export function ImageUpload() {
    const fileInputRef = useRef(null);

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleCameraCapture = () => {
        // Logic to capture image using the device's camera
        // ...
    };

    const handleFileInputChange = (event) => {
        // const selectedFile = event.target.files[0];
        // Logic to handle the selected file
        // ...
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                capture="camera"
                onChange={handleFileInputChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
            />
            <Grid container spacing={2} alignItems="center" sx={{ marginBottom: '16px' }}>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={handleFileUpload} startIcon={<UploadFileIcon />}>Upload Image</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={handleCameraCapture} startIcon={<AddAPhotoIcon />}>Take Picture</Button>
                </Grid>
            </Grid>
        </div>
    );
}
