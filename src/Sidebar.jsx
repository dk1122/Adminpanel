import React from 'react';
import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import image from './icon.png'; // Ensure this path is correct

function Sidebar() {
    const nav = useNavigate();

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 60,
                flexShrink: 0,
                overflow: 'hidden', // Hide the scrollbar
                '& .MuiDrawer-paper': {
                    width: 60,
                    boxSizing: 'border-box',
                    backgroundColor: 'transparent',
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden', // Hide the scrollbar
                },
            }}
        >
            <List sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <ListItem button onClick={() => { nav("/") }}>
                    <ListItemIcon>
                        <img style={{ height: '22px', width: '22px' }} src={image} alt="Home" />
                    </ListItemIcon>
                </ListItem>
                <ListItem button component="a" href="#folks">
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                </ListItem>
                <ListItem button onClick={() => { nav("/Settings") }}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                </ListItem>
                <ListItem button component="a" href="#logout" sx={{ marginTop: 'auto', color: 'red' }}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;