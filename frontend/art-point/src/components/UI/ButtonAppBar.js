import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Navigate } from 'react-router';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/store';

export default function ButtonAppBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuId = 'primary-search-account-menu';
    const isMenuOpen = Boolean(anchorEl);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);


    // if (isLoggedIn) {
    //     console.log("logged in");
    //     return (
    //         <Navigate to="/" />
    //     );
    // }
    // {}

    // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    let content = <div>
        <Button color="inherit" href="/signup" >
            Sign Up
        </Button>
        <Button color="inherit" href="/signin">Sign In</Button>
    </div>;






    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const logoutHandler = () => {
        console.log("log out");
        dispatch(logout());
        handleMenuClose();
    }

    // const handleMobileMenuOpen = (event) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };


    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </Menu>
    );


    if (isLoggedIn) {
        content = (<IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>);
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ flexGrow: 1, textDecoration: "none", color: "white", cursor: "pointer" }}>
                        ArtPoint
                    </Typography>

                    <Button color="inherit" href="/art">Discover Arts</Button>
                    {content}

                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu} */}
            {renderMenu}
        </Box>
    );
}
