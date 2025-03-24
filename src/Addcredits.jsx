import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Modal,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import axios from "axios";
import "./Font.css";

const AddCredits = ({ open, handleClose, userId, wabaId, onCreditsUpdated }) => {
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpdate = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/admin/addCredits", {
        userId,
        wabaId,
        amount: Number(amount),
        notes,
      });

      console.log("Credits Updated:", response.data);

      if (onCreditsUpdated) {
        onCreditsUpdated(response.data);
      }

      setAmount("");
      setNotes("");
      handleClose();
    } catch (err) {
      console.error("Error updating credits:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Failed to update credits.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        elevation={1}
        sx={{
          width: 601,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
        }}
      >
        <Box p={3} height={247}>
          <Stack spacing={2} height="100%">
            <Typography
              variant="h6"
              fontWeight="medium"
              sx={{ fontFamily: "DM Sans" }} // Added fontFamily
            >
              Add Credits
            </Typography>

            <Divider />

            {error && (
              <Typography
                variant="body2"
                color="error"
                sx={{ fontFamily: "DM Sans" }} // Added fontFamily
              >
                {error}
              </Typography>
            )}

            <Box>
              <Stack direction="row" spacing={2}>
                <Box width={188}>
                  <Typography
                    color="text.secondary"
                    fontWeight="medium"
                    mb={1}
                    sx={{ fontFamily: "DM Sans" }} // Added fontFamily
                  >
                    Amount
                  </Typography>
                  <TextField
                    fullWidth
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    variant="outlined"
                    size="small"
                    type="number"
                    sx={{
                      height: 46,
                      fontFamily: "DM Sans", // Added fontFamily
                    }}
                  />
                </Box>

                <Box width={328}>
                  <Typography
                    color="text.secondary"
                    fontWeight="medium"
                    mb={1}
                    sx={{ fontFamily: "DM Sans" }} // Added fontFamily
                  >
                    Reason/Comments
                  </Typography>
                  <TextField
                    fullWidth
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{
                      height: 46,
                      fontFamily: "DM Sans", // Added fontFamily
                    }}
                  />
                </Box>
              </Stack>
            </Box>

            <Divider />

            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                onClick={handleUpdate}
                disabled={loading}
                sx={{
                  width: 200,
                  height: 50,
                  fontWeight: "bold",
                  textTransform: "none",
                  backgroundColor: "#7F2DF1",
                  fontFamily: "DM Sans", // Added fontFamily
                  "&:hover": {
                    backgroundColor: "#6620C1",
                  },
                }}
              >
                {loading ? "Updating..." : "Update"}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Modal>
  );
};

export default AddCredits;
