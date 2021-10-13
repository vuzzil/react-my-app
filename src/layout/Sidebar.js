import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery, Button } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import MenuList from './MenuList';
// import LogoSection from '../LogoSection';
// import MenuCard from './MenuCard';
import { drawerWidth } from 'store/constant';


//styled component...............................................
const Scrollbar = styled(PerfectScrollbar)(({ theme }) => ({
    height: 'calc(100vh - 88px)',
    paddingLeft: '16px',
    paddingRight: '16px',
    [theme.breakpoints.down('sm')]: {
        height: 'calc(100vh - 56px)'
    },
}));


const Nav = styled('nav')(({ theme }) => ({

    [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0
    },
}));


const DrawerPaper = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderRight: 'none',
        [theme.breakpoints.up('md')]: {
            top: '88px'
        }
    },
}));

// ===========================|| SIDEBAR DRAWER ||=========================== //

const Sidebar = ({ drawerOpen, drawerToggle }) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    console.info("Sidebar-->matchUpMd=" + matchUpMd);

    const drawer = (
        <>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <div sx={{
                    display: 'flex',
                    padding: '16px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <Button size="small">Logo</Button>
                </div>
            </Box>
            <BrowserView>
                <Scrollbar component="div" >
                    <MenuList />
                </Scrollbar>
            </BrowserView>
            <MobileView>
                <Box sx={{ px: 2 }}>
                    <MenuList />
                </Box>
            </MobileView>
        </>
    );

    return (
        <Nav aria-label="sidebar drawer">
            <DrawerPaper
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                ModalProps={{ keepMounted: true }}
                color="inherit"

            >
                {drawer}
            </DrawerPaper>
        </Nav>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
};

export default Sidebar;
