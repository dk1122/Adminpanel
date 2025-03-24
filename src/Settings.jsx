import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Rates from "./Rates";
import Subscriptions from "./Subscriptions";
import "./Font.css";

function CustomTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ width: "100%", bgcolor: "background.default", ml: 8, mt: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { backgroundColor: "#7F2DF1", height: 4 } }}
          sx={{ alignItems: "flex-start" }}
        >
          <Tab
            label="Rates"
            sx={{
              fontFamily: "DM Sans", // Added fontFamily
              fontWeight: value === 0 ? "bold" : "normal",
              color: "black !important",
              textTransform: "none",
              fontSize: "18px",
              mr: 2,
            }}
          />
          <Tab
            label="Subscription"
            sx={{
              fontFamily: "DM Sans", // Added fontFamily
              fontWeight: value === 1 ? "bold" : "normal",
              color: "black !important",
              textTransform: "none",
              fontSize: "18px",
              mr: 2,
            }}
          />
        </Tabs>
        {/* Render the active component based on the selected tab */}
        {value === 0 && <Rates />}
        {value === 1 && <Subscriptions />}
      </Box>
    </div>
  );
}

export default CustomTabs;
