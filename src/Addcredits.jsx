import React, { useState } from "react";
import { TextField, Button, Box, Typography, Modal } from "@mui/material";
import "./Font.css";


const AddCredits = ({ open, handleClose }) => {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");

  const handleUpdate = () => {
    console.log("Amount:", amount);
    console.log("Reason:", reason);
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
    justifyContent: 'space-between',
    mb: 2,
  };

  return (
    <div id='add'>
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>
          Add Credits
        </Typography>
        <Box sx={inputContainerStyle}>
          <TextField
            label="Amount"
            variant="outlined"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ flex: 1, mr: 1 }} // Add margin to the right
          />
          <TextField
            label="Reason/Comments"
            variant="outlined"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            sx={{ flex: 1 }} // Flex to take equal space
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleUpdate}
        >
          Update
        </Button>
      </Box>
    </Modal>
    </div>
  );
};

export default AddCredits;