import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Grid,
    Modal,
    Box,
} from '@mui/material';

const AddSubscription = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen} sx={{ bgcolor: 'rgb(106, 39, 214)', mb: 2 }}>
                Add Subscription
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Activate Subscription
                    </Typography>
                    <form>
                        <label htmlFor="">Plan</label>
                        <TextField
                            fullWidth
                            label="Plan"
                            select
                            SelectProps={{
                                native: true,
                            }}
                            sx={{ mb: 2 }} // Use sx for consistent styling
                        >
                            <option value="">Select the Plan</option>
                            {/* Add more options here */}
                        </TextField>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Start Date"
                                    variant="outlined"
                                    helperText="12/5/2025"
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="End Date"
                                    variant="outlined"
                                    helperText="12/6/2025"
                                />
                            </Grid>
                        </Grid>
                    </form>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={handleClose} color="inherit" sx={{ mr: 1 }}>
                            Cancel
                        </Button>
                        <Button variant="contained" sx={{ bgcolor: '#6c63ff' }}>
                            Reset
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default AddSubscription;