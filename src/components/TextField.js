import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function TextFieldsID() {
    return (
        <Box sx={{ minWidth: 120 }}>
            <TextField
                required
                id="textfield-id"
                label="ID"
                fullWidth
            />
        </Box>
    );
}

export function TextFieldsDetails() {
    return (
        <Box sx={{ minWidth: 120 }}>
            <Box sx={{ marginBottom: '16px' }}>
                <TextField
                    id="textfield-obsv"
                    label="Observations"
                    fullWidth
                />
            </Box>
            <Box sx={{ marginBottom: '16px' }}>
                <TextField
                    id="textfield-flup"
                    label="Follow-ups"
                    fullWidth
                />
            </Box>
            <Box sx={{ marginBottom: '16px' }}>
                <TextField
                    id="textfield-zone"
                    label="Zone"
                    fullWidth
                />
            </Box>
        </Box>
    );
}