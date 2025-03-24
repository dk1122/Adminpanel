import React from 'react';
import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import image from './icon.png'; // Ensure this path is correct

function Sidebar() {
    const nav = useNavigate();
    const location = useLocation(); // Use useLocation to get the current route

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 60,
                flexShrink: 0,
                overflow: 'hidden', // Hide the scrollbar
                '& .MuiDrawer-paper': {
                    width: 50,
                    boxSizing: 'border-box',
                    backgroundColor: 'transparent',
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden', // Hide the scrollbar
                },
            }}
        >
            <List sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ListItem sx={{ justifyContent: 'center', padding: '10px 0' }}>
                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                        <img style={{ height: '22px', width: '22px' }} src={image} alt="Home" />
                    </ListItemIcon>
                </ListItem>
                <ListItem button onClick={() => { nav("/") }} 
                sx={{ justifyContent: 'center', 
                padding: '10px 0',
                backgroundColor: location.pathname === '/' ? '#f0f0f0' : 'transparent', // Highlight if on home page
                borderRadius: '8px',
                }}
                >
                    <ListItemIcon sx={{ minWidth: 'auto' , color: location.pathname === '/' ? '#7F2DF1' : 'inherit' }}>
                        <PeopleIcon />
                         </ListItemIcon>
                </ListItem>
                <ListItem
                    button
                    onClick={() => { nav("/settings") }}
                    sx={{
                        justifyContent: 'center',
                        padding: '10px 0',
                        backgroundColor: location.pathname === '/settings' ? '#f0f0f0' : 'transparent', // Highlight if on settings page
                        borderRadius: '8px',
                    }}
                >
                    <ListItemIcon sx={{ minWidth: 'auto', color: location.pathname === '/settings' ? '#7F2DF1' : 'inherit' }}>
                        <SettingsIcon />
                    </ListItemIcon>
                </ListItem>
                <ListItem button onClick={() => { nav("/logout") }} sx={{ justifyContent: 'center', padding: '10px 0', marginTop: 'auto', color: 'red' }}>
                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                        <ExitToAppIcon />
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;
