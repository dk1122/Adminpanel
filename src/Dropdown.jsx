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

  return (
    <div className="dropdown">
      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          sx: { fontFamily: "DM Sans" }, // Added fontFamily
        }}
      >
        <MenuItem
          onClick={() => setOpenCredit(true)}
          sx={{ fontFamily: "DM Sans" }} // Added fontFamily
        >
          Add Credits
        </MenuItem>
        <MenuItem
          onClick={() => setOpenSubscription(true)}
          sx={{ fontFamily: "DM Sans" }} // Added fontFamily
        >
          Subscription
        </MenuItem>
        <MenuItem
          onClick={() => setOpenPricingTable(true)}
          sx={{ fontFamily: "DM Sans" }} // Added fontFamily
        >
          Rates
        </MenuItem>
        <MenuItem
          onClick={() => setOpenPassword(true)}
          sx={{ fontFamily: "DM Sans" }} // Added fontFamily
        >
          Reset Password
        </MenuItem>
        <MenuItem
          onClick={() => setOpenAddsubscription(true)}
          sx={{ fontFamily: "DM Sans" }} // Added fontFamily
        >
          Add Subscription
        </MenuItem>
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
