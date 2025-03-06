import React, { useState } from 'react';

import { Menu, MenuItem, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCredits from './Addcredits';
import Subscription from './Subscription';
import Password from './Password';
import PricingTable from './PricingTable';
import Addsubscription from './Addsubscription';
import './Dropdown.css';

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCredit, setOpenCredit] = useState(false);
  const [openSubscription, setOpenSubscription] = useState(false);
  const [openPricingTable, setOpenPricingTable] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [openAddsubscription, setOpenAddsubscription] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // const handleOptionClick = (option) => {
  //   console.log(`Selected: ${option}`);
  //   handleMenuClose(); // Close dropdown after selection
  // };

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
        <MenuItem onClick={() => setOpenAddsubscription(true)}>Add Subscription</MenuItem>
      </Menu>
      {openCredit && <AddCredits open={openCredit} handleClose={() => setOpenCredit(false)} />}
      {openSubscription && <Subscription open={openSubscription} handleClose={() => setOpenSubscription(false)} />}
      {openPricingTable && <PricingTable open={openPricingTable} handleClose={() => setOpenPricingTable(false)} />}
      {openPassword && <Password open={openPassword} handleClose={() => setOpenPassword(false)} />}
      {openAddsubscription && <Addsubscription open={openAddsubscription} handleClose={() => setOpenAddsubscription(false)} />}
    </div>
  );
};

export default Dropdown;