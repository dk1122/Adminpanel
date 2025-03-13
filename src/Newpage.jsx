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
        <Typography variant="h4" align="center" gutterBottom>
          Create New Account
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label htmlFor="">Name*</label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter your name here"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="">Email*</label>
              <TextField
                variant="outlined"
                fullWidth
                type="email"
                placeholder="example@convobox.com"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="">Phone number</label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="+91 9994770276"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="">Business name*</label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter business name"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="">Business Website*</label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter business website"
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="">Password*</label>
              <TextField
                variant="outlined"
                fullWidth
                type="password"
                placeholder="Min. 8 characters"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth style={{ backgroundColor: '#8e24aa' }}>
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
