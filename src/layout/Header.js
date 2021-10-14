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
// project imports
import LogoSection from './LogoSection';

const Header = ({ handleLeftDrawerToggle }) => {

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static" sx={{ height: '80px' }}>

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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        APP BAR
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
