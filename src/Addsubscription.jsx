import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Modal,
    Box,
    IconButton,
    Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddSubscription = ({ open, handleClose }) => {
    const [plan, setPlan] = useState("");
    const [duration, setDuration] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleUpdate = () => {
        console.log("Plan:", plan);
        console.log("Duration:", duration);
        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
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
                <Typography variant="h6" gutterBottom sx={{ fontFamily: "DM Sans" }}>
                    Activate Subscription
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Box sx={{ flex: 1 }}>
                        <label htmlFor="plan" style={{ fontFamily: "DM Sans", marginBottom: 4, display: 'block' }}>
                            Plan
                        </label>
                        <TextField
                            id="plan"
                            variant="outlined"
                            select
                            SelectProps={{
                                native: true,
                            }}
                            value={plan}
                            onChange={(e) => setPlan(e.target.value)}
                            sx={{ width: '100%', fontFamily: "DM Sans" }}
                        >
                            <option value="">Select the Plan</option>
                            <option value="basic">Basic</option>
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                        </TextField>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <label htmlFor="duration" style={{ fontFamily: "DM Sans", marginBottom: 4, display: 'block' }}>
                            Duration
                        </label>
                        <TextField
                            id="duration"
                            variant="outlined"
                            select
                            SelectProps={{
                                native: true,
                            }}
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            sx={{ width: '100%', fontFamily: "DM Sans" }}
                        >
                            <option value="">Select the Duration</option>
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="yearly">Yearly</option>
                        </TextField>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                        label="Start Date"
                        variant="outlined"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        helperText="Min. 8 characters"
                        sx={{ flex: 1, fontFamily: "DM Sans" }}
                        InputProps={{
                            sx: { fontFamily: "DM Sans" },
                        }}
                    />
                    <TextField
                        label="End Date"
                        variant="outlined"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        helperText="Min. 8 characters"
                        sx={{ flex: 1, fontFamily: "DM Sans" }}
                        InputProps={{
                            sx: { fontFamily: "DM Sans" },
                        }}
                    />
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end', // Align button to the right
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: '#7F2DF1',
                            height: 45,
                            width: 200,
                            fontFamily: "DM Sans",
                        }}
                        onClick={handleUpdate}
                    >
                        Reset
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default AddSubscription;
