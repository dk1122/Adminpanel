import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, IconButton, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCredits from './Addcredits';
import Subscription from './Subscription';
import Password from './Password';
import PricingTable from './PricingTable';
import './Dropdown.css'; // Import your CSS file

const Dropdown = () => {
  const nav = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCredit, setOpenCredit] = useState(false);
  const [openSubscription, setOpenSubscription] = useState(false);
  const [openPricingTable, setOpenPricingTable] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected: ${option}`);
    handleMenuClose(); // Close dropdown after selection
  };

  return (
    <div className="dropdown">
      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => setOpenCredit(true)}>Add Credits</MenuItem>
        <MenuItem onClick={() => setOpenSubscription(true)}>Subscription</MenuItem>
        <MenuItem onClick={() => setOpenPricingTable(true)}>Rates</MenuItem>
        <MenuItem onClick={() => setOpenPassword(true)}>Reset Password</MenuItem>
      </Menu>
      {openCredit && <AddCredits open={openCredit} handleClose={() => setOpenCredit(false)} />}
      {openSubscription && <Subscription open={openSubscription} handleClose={() => setOpenSubscription(false)} />}
      {openPricingTable && <PricingTable open={openPricingTable} handleClose={() => setOpenPricingTable(false)} />}
      {openPassword && <Password open={openPassword} handleClose={() => setOpenPassword(false)} />}
    </div>
  );
};

export default Dropdown;