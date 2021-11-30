import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Navigate } from 'react-router';

import { Link } from "react-router-dom";

import LandscapeIcon from '@mui/icons-material/Landscape';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';

const UserProfileView = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const user = useSelector(state => state.auth.user);



    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    if (!isLoggedIn) {
        return (
            <Navigate to="/" />
        );
    }

    return (
        <div>
            <Typography variant="h3">Hi, {user.firstName}!</Typography>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
            >
                <ListItemButton
                    component={Link}
                    to={"/user/" + user.id + "/arts"}
                >
                    <ListItemIcon>
                        <LandscapeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Your Art" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/art/create"
                >
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add New Art" />
                </ListItemButton>

                <ListItemButton
                    component={Link}
                    to="/setting"
                >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Account Settings" />
                </ListItemButton>
                {/* <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton> */}
                {/* <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse> */}
            </List>
        </div>
    );
}

export default UserProfileView;