import React from 'react';

import { useTheme } from '@mui/material/styles';
import { useMediaQuery, CssBaseline, AppBar, Typography } from '@mui/material';

import { Outlet } from 'react-router-dom';

// const drawerWidth = 360;

// // style constant
// const useStyles = (theme) => ({

//     root: {
//         backgroundColor: '#757575',
//         display: 'flex'
//     },
//     appBar: {
//         backgroundColor: theme.palette.warning.main
//     },
//     appBarWidth: {
//         transition: theme.transitions.create('width'),
//         backgroundColor: theme.palette.background.default
//     },
//     content: {
//         ...theme.typography.mainContent,
//         backgroundColor: theme.palette.secondary.main,
//         borderBottomLeftRadius: 0,
//         borderBottomRightRadius: 0,
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//         }),
//         [theme.breakpoints.up('md')]: {
//             marginLeft: -(drawerWidth - 20),
//             width: `calc(100% - ${drawerWidth}px)`
//         },
//         [theme.breakpoints.down('md')]: {
//             marginLeft: '20px',
//             width: `calc(100% - ${drawerWidth}px)`,
//             padding: '16px'
//         },
//         [theme.breakpoints.down('sm')]: {
//             marginLeft: '10px',
//             width: `calc(100% - ${drawerWidth}px)`,
//             padding: '16px',
//             marginRight: '10px'
//         }
//     },
//     contentShift: {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen
//         }),
//         marginLeft: 0,
//         borderBottomLeftRadius: 0,
//         borderBottomRightRadius: 0,
//         [theme.breakpoints.down('md')]: {
//             marginLeft: '20px'
//         },
//         [theme.breakpoints.down('sm')]: {
//             marginLeft: '10px'
//         }
//     }
// });
// ===========================|| MAIN LAYOUT ||=========================== //


const MainLayout = () => {

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    console.info("MainLayout-->matchDownMd=" + matchDownMd);

    // const classes = useStyles(theme);
    // console.info("classes.root=" + JSON.stringify(classes.root));

    return (
        <div >
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="info"
                elevation={0}
            >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    APP BAR
                </Typography>
            </AppBar>


            {/* main content  sx={JSON.stringify(classes.content)} */}
            <main>
                <Outlet />
            </main>
        </div>
    );
}


export default MainLayout;