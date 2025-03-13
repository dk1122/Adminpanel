import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Modal,
    Box,
} from '@mui/material';

const AddSubscription = ({ open, handleClose }) => {
    const [plan, setPlan] = useState("");

    const handleUpdate = () => {
        console.log("Plan:", plan);
        // Add your logic to handle the subscription update here
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        p: 4,
    };

    const inputContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        mb: 2,
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h6" gutterBottom>
                    Activate Subscription
                </Typography>
                <div style={inputContainerStyle}>
                    <label htmlFor="">Plan</label>
                    <TextField
                        // label="Plan"
                        variant="outlined"
                        select
                        SelectProps={{
                            native: true,
                        }}
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                        sx={{ mb: 2 }} // Use sx for consistent styling
                    >
                        <option value="">Select the Plan</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="yearly">Yearly</option>
                    </TextField>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleUpdate}
                >
                    Activate
                </Button>
                <Button
                    variant="outlined"
                    color="inherit"
                    fullWidth
                    onClick={handleClose}
                    sx={{ mt: 1 }}
                >
                    Cancel
                </Button>
            </Box>
        </Modal>
    );
};

export default AddSubscription;
