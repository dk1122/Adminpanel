import React, { useState } from "react";
import { TextField, Button, IconButton, InputAdornment, Box, Typography, Modal, Divider } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Font.css";

const Password = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleReset = () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
    } else if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
    } else {
      setError("");
      console.log("Password reset successful");
      // Add your password reset logic here
    }
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
        <Typography variant="h6" gutterBottom sx={{ fontFamily: "DM Sans" }}>
          Reset Password
        </Typography>
        <Divider sx={{ my: 2 }} />
        <TextField
          fullWidth
          label="New Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          helperText="Min. 8 characters"
          sx={{ mb: 2, fontFamily: "DM Sans" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            sx: { fontFamily: "DM Sans" },
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
          sx={{ mb: 2, fontFamily: "DM Sans" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            sx: { fontFamily: "DM Sans" },
          }}
        />
        {error && (
          <Typography color="error" sx={{ mb: 2, fontFamily: "DM Sans" }}>
            {error}
          </Typography>
        )}
        <Divider sx={{ my: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Align button to the right
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
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Password;
