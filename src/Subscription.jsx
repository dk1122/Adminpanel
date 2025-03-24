import React, { useState } from "react";
import "./Font.css";
import {
  TextField,
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Subscription = ({ open, handleClose }) => {
  const [prices, setPrices] = useState({
    Starter: { Monthly: "2499", Yearly: "2199" },
    Growth: { Monthly: "2499", Yearly: "2199" },
    Premium: { Monthly: "2499", Yearly: "2199" },
  });

  const handleChange = (plan, type, value) => {
    setPrices((prev) => ({
      ...prev,
      [plan]: { ...prev[plan], [type]: value },
    }));
  };

  const handleReset = () => {
    setPrices({
      Starter: { Monthly: "2499", Yearly: "2199" },
      Growth: { Monthly: "2499", Yearly: "2199" },
      Premium: { Monthly: "2499", Yearly: "2199" },
    });
  };

  const handleUpdate = () => {
    console.log("Updated Prices:", prices);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    p: 4,
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontFamily: "DM Sans" }} // Added fontFamily
        >
          Subscription
        </Typography>
        <Divider sx={{ my: 2 }} />
        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    fontFamily: "DM Sans", // Added fontFamily
                  }}
                >
                  Plan Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    fontFamily: "DM Sans", // Added fontFamily
                  }}
                >
                  Monthly
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    fontFamily: "DM Sans", // Added fontFamily
                  }}
                >
                  Yearly
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell
                  sx={{
                    fontSize: "0.875rem",
                    color: "gray",
                    fontFamily: "DM Sans", // Added fontFamily
                  }}
                >
                  Price per Month
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "0.875rem",
                    color: "gray",
                    fontFamily: "DM Sans", // Added fontFamily
                  }}
                >
                  Price per Month
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(prices).map(([plan, pricing]) => (
                <TableRow key={plan}>
                  <TableCell
                    sx={{
                      fontSize: "1.125rem",
                      fontFamily: "DM Sans", // Added fontFamily
                    }}
                  >
                    {plan}
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      value={pricing.Monthly}
                      onChange={(e) => handleChange(plan, "Monthly", e.target.value)}
                      sx={{
                        fontSize: "1.125rem",
                        fontFamily: "DM Sans", // Added fontFamily
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      value={pricing.Yearly}
                      onChange={(e) => handleChange(plan, "Yearly", e.target.value)}
                      sx={{
                        fontSize: "1.125rem",
                        fontFamily: "DM Sans", // Added fontFamily
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}> {/* Aligned buttons to the right */}
          <Button
            variant="outlined"
            sx={{
              fontFamily: "DM Sans", // Added fontFamily
              fontWeight: "bold",
              color: "#821adc",
              borderColor: "#7F2DF1",
              height: 45,
              width: 200,
            }}
            onClick={handleReset}
          >
            Reset Price
          </Button>
          <Button
            variant="contained"
            sx={{
              fontFamily: "DM Sans", // Added fontFamily
              fontWeight: "bold",
              bgcolor: "#7F2DF1",
              height: 45,
              width: 200,
            }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Subscription;
