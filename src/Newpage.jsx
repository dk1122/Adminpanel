import React from 'react';
import "./Font.css";
import { TextField, Button, Typography, Grid, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Newpage = ({ open, handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: '8px',
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
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontFamily: "DM Sans" }} // Added fontFamily
        >
          Create New Account
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label htmlFor="" style={{ fontFamily: "DM Sans" }}>Name*</label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter your name here"
                required
                sx={{ fontFamily: "DM Sans" }} // Added fontFamily
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="" style={{ fontFamily: "DM Sans" }}>Email*</label>
              <TextField
                variant="outlined"
                fullWidth
                type="email"
                placeholder="example@convobox.com"
                required
                sx={{ fontFamily: "DM Sans" }} // Added fontFamily
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="" style={{ fontFamily: "DM Sans" }}>Phone number</label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="+91 9994770276"
                required
                sx={{ fontFamily: "DM Sans" }} // Added fontFamily
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="" style={{ fontFamily: "DM Sans" }}>Business name*</label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter business name"
                required
                sx={{ fontFamily: "DM Sans" }} // Added fontFamily
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="" style={{ fontFamily: "DM Sans" }}>Business Website*</label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter business website"
                sx={{ fontFamily: "DM Sans" }} // Added fontFamily
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="" style={{ fontFamily: "DM Sans" }}>Password*</label>
              <TextField
                variant="outlined"
                fullWidth
                type="password"
                placeholder="Min. 8 characters"
                required
                sx={{ fontFamily: "DM Sans" }} // Added fontFamily
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  backgroundColor: '#7F2DF1',
                  fontFamily: "DM Sans", // Added fontFamily
                }}
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default Newpage;
