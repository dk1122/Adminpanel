import React from "react";
import "./Font.css";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Modal,
  Box,
  Divider,
} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 631,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  p: 4,
};

const PricingTable = ({ open, handleClose }) => {
  const pricingTiers = [
    { name: "Starter", defaultPrice: "0.79.553", markupPrice: "2199" },
    { name: "Growth", defaultPrice: "2499", markupPrice: "2199" },
    { name: "Premium", defaultPrice: "2499", markupPrice: "2199" },
  ];

  const navOptions = ["India", "Default Pricing", "Markup Pricing"];

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper elevation={3} sx={style}>
        <Typography
          variant="h6"
          fontWeight="medium"
          sx={{ mb: 2, fontFamily: "DM Sans" }}
        >
          Rates
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Box
          sx={{
            bgcolor: "#f9f7ff",
            borderRadius: "10px",
            p: 2,
            mb: 3,
            display: "flex",
          }}
        >
          {navOptions.map((option, index) => (
            <Typography
              key={index}
              variant="h6"
              fontWeight="medium"
              sx={{
                mr: index < navOptions.length - 1 ? 8 : 0,
                fontSize: "1.125rem",
                fontFamily: "DM Sans",
              }}
            >
              {option}
            </Typography>
          ))}
        </Box>

        {pricingTiers.map((tier, index) => (
          <Grid container key={index} alignItems="right" spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={2}>
              <Typography
                variant="h6"
                fontWeight="medium"
                sx={{ fontFamily: "DM Sans" }}
              >
                {tier.name}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                value={tier.defaultPrice}
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: "5px", height: 46, fontFamily: "DM Sans" },
                }}
              />
            </Grid>
            <Grid item xs={5} sx={{ textAlign: "right" }}>
              <TextField
                fullWidth
                value={tier.markupPrice}
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: "5px", height: 46, fontFamily: "DM Sans" },
                }}
              />
            </Grid>
          </Grid>
        ))}

        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Align buttons to the right
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: 200,
              height: 45,
              borderColor: "#821adc",
              color: "#821adc",
              fontWeight: "bold",
              textTransform: "none",
              fontFamily: "DM Sans",
            }}
          >
            Reset Rates
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 200,
              height: 45,
              bgcolor: "#821adc",
              fontWeight: "bold",
              textTransform: "none",
              fontFamily: "DM Sans",
            }}
          >
            Update
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default PricingTable;
