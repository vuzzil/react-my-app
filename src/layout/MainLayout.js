import React from 'react';

import { useTheme, styled } from '@mui/material/styles';
import { useMediaQuery, CssBaseline, AppBar, Typography } from '@mui/material';
import { drawerWidth } from 'store/constant';
import { Outlet } from 'react-router-dom';


const Main = styled('main')(({ theme }) => ({
    //...theme.typography.mainContent,
    width: '100%',
    minHeight: 'calc(100vh - 88px)',
    flexGrow: 1,
    padding: '20px',
    marginTop: '88px',
    marginRight: '20px',
    backgroundColor: theme.palette.background.paper,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('md')]: {
        marginLeft: drawerWidth ,
        width: `calc(100% - ${drawerWidth}px)`
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px'
    },
    [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px',
        marginRight: '10px'
    },
}));
// ===========================|| MAIN LAYOUT ||=========================== //


const MainLayout = () => {

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    console.info("MainLayout-->matchDownMd=" + matchDownMd);

    // const classes = useStyles(theme);
    // console.info("classes.root=" + JSON.stringify(classes.root));

    return (
        <div sx="{{backgroundColor: 'red',display: 'flex'}} ">test
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="info"
                elevation={0}
            >
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    APP BAR
                </Typography>
            </AppBar>


            {/* main content  sx={JSON.stringify(classes.content)} */}
            <Main>
                <Outlet />
            </Main>
        </div >
    );
}


export default MainLayout;