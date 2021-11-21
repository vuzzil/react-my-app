import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import { Alert, AlertTitle } from '@mui/material';

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

// project imports
import LogoSection from './LogoSection';
import { logout } from 'services/auth.service'

const Header = ({ handleLeftDrawerToggle }) => {
    //const [err, setErr] = React.useState(false);
    //const [errMessage, setErrMessage] = React.useState('');
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);
    let userinfo = (user && user.username) ? "使用者=" + user.username : "";
    let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    console.log("isLoggedIn=" + isLoggedIn + ",user=" + userinfo);


    const handleClick = () => {
        logout()
            .then(() => {
                navigate("/login");
            });
            // .catch(error => {
            //     console.log(error);
            //     setErr(true);
            //     setErrMessage(error.message);
            // });
    }

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static" sx={{ height: '65px' }}>

                <Toolbar>
                    <LogoSection />
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, }}
                        onClick={handleLeftDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        APP BAR
                    </Typography>
                    <Button color="inherit" onClick={handleClick}>({userinfo})    Logout</Button>
                </Toolbar>
            </AppBar>

            {/* {err &&
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {errMessage}
                </Alert>
            } */}
        </Box>
    );
}


Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
