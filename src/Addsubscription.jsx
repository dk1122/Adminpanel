import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Modal,
    Box,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddSubscription = ({ open, handleClose }) => {
    const [plan, setPlan] = useState("");
    const [subscriptionType, setSubscriptionType] = useState("");

    const handleUpdate = () => {
        console.log("Plan:", plan);
        console.log("Subscription Type:", subscriptionType);
        
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
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
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
                        sx={{ mb: 2 }} 
                    >
                        <option value="">Select the Subscription Type</option>
                        <option value="monthly">Basic</option>
                        <option value="quarterly">Standard</option>
                        <option value="yearly">premium</option>
                    </TextField>
                    <label htmlFor="">Subscription Type</label>
                    <TextField
                        // label="Subscription Type"
                        variant="outlined"
                        select
                        SelectProps={{
                            native: true,
                        }}
                        value={subscriptionType}
                        onChange={(e) => setSubscriptionType(e.target.value)}
                        sx={{ mb: 2 }} 
                    >
                        <option value="">Select the duration</option>
                        <option value="basic">Monthly</option>
                        <option value="standard">Quaterly</option>
                        <option value="premium">Yearly</option>
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
            </Box>
        </Modal>
    );
};

export default AddSubscription;
