import React from "react";
import { Grid, Typography, TextField, Button, Paper, Modal, Box} from "@mui/material";

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

const PricingTable = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper elevation={3} sx={style}>
        <Typography variant="h6" gutterBottom>
          Rates
        </Typography>
        
        <Box sx={{ backgroundColor: "#f5f2ff", padding: 2, borderRadius: 1 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="subtitle1">India</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" align="center">Default Pricing</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" align="center">Markup Pricing</Typography>
            </Grid>
          </Grid>
        </Box>

        {["Starter", "Growth", "Premium"].map((plan, index) => (
          <Grid container spacing={2} alignItems="center" key={plan} sx={{ mt: 2 }}>
            <Grid item xs={4}>
              <Typography>{plan}</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth defaultValue={index === 0 ? "0.79.553" : "2499"} variant="outlined" size="small" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth defaultValue="2199" variant="outlined" size="small" />
            </Grid>
          </Grid>
        ))}
        
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined" color="secondary">
              Reset Rates
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary">
              Update
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default PricingTable;