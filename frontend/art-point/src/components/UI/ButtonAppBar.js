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
import { Icon, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

//import { ReactComponent as Logo } from '../../logo.svg';
//import Logo from '../../logo.svg';
import WhiteLogo from '../../whitelogo.png';

const drawerWidth = 240;

function Logo(props) {
    return (
        <SvgIcon viewBox="0 0 320 86.3402265353029"  {...props}>
            <path d="M26.21,92.168l13.429-4.4l7.997-13.37C40.466,80.339,32.642,86.824,26.21,92.168L26.21,92.168z M36.454,62.986l6.032-5.279   L32.226,13.173l-5.269,37.935L36.454,62.986L36.454,62.986z M43.234,57.051l2.234-1.957c0.071-0.062,0.456-0.168,0.55-0.15   l11.338,2.044l3.531-7.285L32.949,12.409L43.234,57.051L43.234,57.051z M56.761,58.217l-7.124-1.285l6.456,2.664L56.761,58.217   L56.761,58.217z M45.117,57.148l-1.623,1.422c-0.051,0.107-0.144,0.185-0.255,0.222l-5.965,5.223l2.006,2.51L45.117,57.148   L45.117,57.148z M14.843,45.839l5.087-0.731L12.897,43.5L4.502,54.387l9.84-8.376C14.43,45.944,14.495,45.889,14.843,45.839   L14.843,45.839z M21.051,45.828c-0.024,0.006-5.854,0.845-5.854,0.845s8.104,43.903,8.366,45.094l14.915-24.138L21.051,45.828   L21.051,45.828z M47.21,57.351l2.444,13.668l10.199-8.446L47.21,57.351L47.21,57.351z M48.877,71.661L46.368,57.63L25.622,90.943   C32.641,85.114,41.263,77.969,48.877,71.661L48.877,71.661z M4.679,55.388l8.922-3.774c0.43-0.182,0.826,0.035,0.905,0.491   l6.795,37.315c0.469-0.124,0.538-0.137,0.824-0.222L14.39,47.122L4.679,55.388L4.679,55.388z M57.311,60.098l3.69,1.524   l6.831-5.655c0.244-0.202,0.677-0.177,0.896,0.053l4.386,4.596l4.675-42.769L57.311,60.098L57.311,60.098z M19.385,87.76   l-0.801-4.597l-1.457,1.632L19.385,87.76L19.385,87.76z M96.383,86.909L68.198,57.371l-17.995,14.9L96.383,86.909L96.383,86.909z    M40.709,87.688l54.357-0.278L49.512,72.972L40.709,87.688L40.709,87.688z M98.28,88.709l-58.188,0.296l-16.331,5.35   c-0.634,0.158-0.953-0.299-1.044-0.618c-0.252-0.901-0.602-2.094-0.838-3.011c-0.586,0.171-1.447,0.495-1.993-0.136l-4.135-5.431   c-0.246-0.364-0.404-0.567,0.154-1.265c0.908-0.952,1.828-1.872,2.386-2.404l-4.939-28.346L1.479,58.169   c-0.765,0.325-1.285-0.347-0.777-1.007l11.41-14.797c0.2-0.271,0.395-0.288,0.667-0.24l8.337,1.906   c0.231,0.078,0.338,0.194,0.366,0.23l4.343,5.431l5.521-39.741c0.101-0.727,0.736-0.892,1.178-0.303l29.009,38.723l16.729-34.52   c0.385-0.789,1.343-0.512,1.247,0.359l-5.21,47.647l24.555,25.734C99.342,88.104,98.885,88.695,98.28,88.709L98.28,88.709z"></path>
        </SvgIcon>
    );
}


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
                    
                    <Button href="/"><img width="150" src={WhiteLogo} /></Button>
                    

                    {/* <LandscapeIcon sx={{ mr: 2 }} /> */}
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ flexGrow: 1, textDecoration: "none", color: "white", cursor: "pointer" }}>
                        
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
