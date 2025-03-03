import React from "react";
import { Box, Typography } from "@mui/material";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Box sx={{ maxWidth: 400, mx: "auto", p: 3, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h6" gutterBottom>
            Something went wrong.
          </Typography>
          <Typography variant="body1">
            Please try again later.
          </Typography>
        </Box>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;