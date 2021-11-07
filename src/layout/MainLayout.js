import React from 'react';

import { useTheme, styled } from '@mui/material/styles';
import { useMediaQuery, CssBaseline } from '@mui/material';
import { drawerWidth } from 'store/constant';
import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { SET_MENU } from 'store/actions';

// project imports
import Header from './Header';
import Sidebar from './Sidebar';
import ErrorNotification from './ErrorNotification';
import { getLoginUser } from 'services/auth.service'

const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'isDrawerOpened',
})(({ isDrawerOpened, theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 70px)',
    flexGrow: 1,
    padding: '10px 20px 10px 20px',
    marginTop: '5px',
    marginRight: '20px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: theme.palette.background.default,
    marginLeft: 0,

    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
    }),


    //if  DrawerOpened..............................................
    ...(isDrawerOpened && {
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: (drawerWidth),
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
    }),

}));
// ===========================|| MAIN LAYOUT ||=========================== //


const MainLayout = () => {

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    
    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    //console.log("MainLayout-->leftDrawerOpened=" + leftDrawerOpened);

    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    React.useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownMd });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    //check login user..............................................................
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user);
    if (isLoggedIn) {
        if (user && user.username) {
            //console.log("MainLayout->isLoggedIn=" + isLoggedIn + ",user=" + user.username);
        } else {
            //console.log("MainLayout->isLoggedIn=true BUT has no user,start reflesh user...");
            getLoginUser();
            console.log("MainLayout->reflesh user 完成!");
        }
    }


    return (
        <div sx="{{display: 'flex'}} ">
            <CssBaseline />
            {/* header */}
            <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />

            {/* drawer */}
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />


            {/* main content  sx={JSON.stringify(classes.content)} */}
            <Main isDrawerOpened={leftDrawerOpened}>
                <Outlet />
                <ErrorNotification />
            </Main>
        </div >
    );
}


export default MainLayout;