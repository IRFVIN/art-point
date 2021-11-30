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
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/store';
// import TemporaryDrawer from './TemporaryDrawer';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ListItemIcon, ListItemText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidth = 240;


export default function ButtonAppBar(props) {

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
        <Button startIcon={<PersonAddIcon/>} color="inherit" href="/signup" >
            Sign Up
        </Button>
        <Button startIcon={<LoginIcon/>} color="inherit" href="/signin">Sign In</Button>
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
            <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText>
                    Your Profile
                </ListItemText>
            </MenuItem>
            
            <MenuItem onClick={logoutHandler}>
            <ListItemIcon>
                <LogoutIcon />
                </ListItemIcon>
                <ListItemText>
                    Logout
                </ListItemText>
            </MenuItem>
        </Menu>
    );

    const user = useSelector(state => state.auth.user);

    if (isLoggedIn) {
        content = (<div>
            <IconButton
                size="large"
                edge="end"
                aria-label="notifications of current user"
                // aria-controls={menuId}
                component={Link}
                aria-haspopup="true"
                to="/notification"
                // onClick={handleProfileMenuOpen}
                color="inherit"
            >
                <CircleNotificationsIcon />
            </IconButton>

            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
            >
                <Typography>{user.firstName}</Typography>
                <AccountCircle />
            </IconButton>
        </div>);
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed"
                sx={{
                    // width: { sm: `calc(100% - ${drawerWidth}px)` },
                    // ml: { sm: `${drawerWidth}px` },
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}>
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={props.handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <TemporaryDrawer /> */}
                    <LandscapeIcon sx={{ mr: 2 }} />
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ flexGrow: 1, textDecoration: "none", color: "white", cursor: "pointer" }}>
                        Art Point
                    </Typography>

                    {/* <Button color="inherit" href="/art">Discover Arts</Button> */}
                    {content}

                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu} */}
            {renderMenu}
        </Box>
    );
}
