import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/store';

export default function ButtonAppBar() {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        console.log("log out");
        dispatch(logout());
    }

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    let content = <div>
        <Button color="inherit" href="/signup" >
            Sign Up
        </Button>
        <Button color="inherit" href="/signin">Sign In</Button>
    </div>;

    if (isLoggedIn) {
        content = (<Button color="inherit" onClick={logoutHandler}>Log out</Button>);
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

                    {content}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
