import React, { useState } from "react";
import { TextField, Button, IconButton, InputAdornment, Box, Typography, Modal } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Password = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleReset = () => {
    if (newPassword === confirmPassword && newPassword.length >= 8) {
      console.log("Password reset successful");
    } else {
      console.log("Passwords do not match or do not meet the criteria.");
    }
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
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>
          Reset Password
        </Typography>
        <TextField
          fullWidth
          label="New Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          helperText="Min. 8 characters"
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label="Confirm Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          helperText="Min. 8 characters"
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
    </Modal>
  );
};

export default Password;