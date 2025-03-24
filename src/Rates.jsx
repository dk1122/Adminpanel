import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const AdminPanel = () => {
  // Data for the pricing table
  const pricingData = [
    { service: "Marketing", defaultPrice: "0.79.553", markupPrice: "0.86" },
    { service: "Utility", defaultPrice: "0.12", markupPrice: "0.20" },
    { service: "Authentication", defaultPrice: "0.14", markupPrice: "0.20" },
    { service: "Service", defaultPrice: "Free", markupPrice: "Free" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "white", // Changed background color to white
        minHeight: "100vh",
        alignItems: "flex-start", // Align content to the left
        justifyContent: "flex-start", // Align content to the top
        padding: 0,
      }}
    >
      {/* Main content */}
      <Box sx={{ flexGrow: 1, mt: 0, ml: 0 }}>
        {/* Pricing Table */}
        <Paper
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            maxWidth: 600,
            mt: 4,
            boxShadow: 3,
          }}
        >
          {/* Table Header */}
          <Box sx={{ display: "flex", p: 3 }}>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontSize: "1.125rem",
                width: "30%",
              }}
            >
              India
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontSize: "1.125rem",
                width: "35%",
              }}
            >
              Default Pricing
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontSize: "1.125rem",
                width: "35%",
              }}
            >
              Markup Pricing
            </Typography>
          </Box>

          <Divider />

          {/* Table Content */}
          <Box sx={{ p: 3 }}>
            {pricingData.map((item, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 3 }}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      fontFamily: "DM Sans",
                      fontWeight: 500,
                      fontSize: "1.125rem",
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    {item.service}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={item.defaultPrice}
                    InputProps={{
                      sx: {
                        fontFamily: "DM Sans",
                        fontWeight: 500,
                        fontSize: "1.125rem",
                        height: "46px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={item.markupPrice}
                    InputProps={{
                      sx: {
                        fontFamily: "DM Sans",
                        fontWeight: 500,
                        fontSize: "1.125rem",
                        height: "46px",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            ))}
          </Box>

          <Divider />

          {/* Action Buttons */}
          <Box
            sx={{
              p: 3,
              display: "flex",
              justifyContent: "flex-end", // Align buttons to the right
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                fontFamily: "DM Sans",
                fontWeight: "bold",
                color: "#821adc",
                borderColor: "#821adc",
                height: 45,
                width: 200,
              }}
            >
              Reset Rates
            </Button>
            <Button
              variant="contained"
              sx={{
                fontFamily: "DM Sans",
                fontWeight: "bold",
                bgcolor: "#821adc",
                height: 45,
                width: 200,
              }}
            >
              Update
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminPanel;
