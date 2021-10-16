import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mui/material';

//icons....................
import BurstModeIcon from '@mui/icons-material/BurstMode';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BallotIcon from '@mui/icons-material/Ballot';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';


// project imports
import { MENU_OPEN, SET_MENU } from 'store/actions';


const categories = [
    {
        id: 'Pages',
        children: [
            { id: 'Page1', label: '測試頁面1', url: '/Page1', icon: <BallotIcon /> },
            { id: 'Page2', label: '測試頁面2', url: '/Page2', icon: <BallotIcon /> },
            { id: 'Page3', label: '測試頁面3', url: '/Page3', icon: <BallotIcon /> },
            { id: 'Page4', label: '測試頁面4', url: '/Page4', icon: <BallotIcon /> },
            { id: 'Setting', label: 'Setting', url: '/Setting', icon: <MiscellaneousServicesIcon /> },

        ],
    },
    {
        id: '前台',
        children: [
            { id: 'F001', label: '訂位/預約', url: '/#', icon: <PeopleIcon />, active: true, },
            { id: 'F002', label: '菜單', url: '/#', icon: <DnsRoundedIcon /> },
            { id: 'F003', label: '點菜狀況查詢', url: '/#', icon: <PermMediaOutlinedIcon /> },
            { id: 'F004', label: '顧客滿意度調查', url: '/#', icon: <PublicIcon /> },

        ],
    },
    {
        id: '後台',
        children: [
            { id: 'B001', label: '出餐狀況查詢', url: '/#', icon: <SettingsIcon /> },
            { id: 'B002', label: '營運統計', url: '/#', icon: <PhonelinkSetupIcon /> },
            { id: 'B003', label: '菜單維護', url: '/#', icon: <TimerIcon /> },
            { id: 'B004', label: '顧客資料維護', url: '/#', icon: <SettingsInputComponentIcon /> },
            { id: 'B005', label: '食材資料維護', url: '/#', icon: <SettingsEthernetIcon /> },
            { id: 'B006', label: '供應商資料維護', url: '/#', icon: <SettingsInputComponentIcon /> },
        ],
    },
];

export default function MenuList() {
    const dispatch = useDispatch();
    const matchesSM = useMediaQuery((theme) => theme.breakpoints.down('md'));


    const itemHandler = (id) => {
        dispatch({ type: MENU_OPEN, id });
        if (matchesSM) dispatch({ type: SET_MENU, opened: false });
    };

    return (
        <Box>

            {categories.map(({ id, children }) => (
                <nav aria-label="主選單">
                    <List>
                        <ListItem disablePadding>
                            <ListItemText
                                primaryTypographyProps={{
                                    variant: 'subtitle1',
                                    fontFamily: '"Microsoft JhengHei","Roboto","Arial"',
                                    fontWeight: 'medium',
                                    letterSpacing: 0,
                                }}
                            >{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, label, url, icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton
                                    component={Link}
                                    to={url}
                                    onClick={() => itemHandler({ childId })}
                                    sx={{ py: 0, minHeight: 32 }}
                                >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText> {label}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{ mt: 1 }} />
                </nav>
            ))}



            {/* <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>

                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>

                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            to="page1"
                            onClick={() => itemHandler('page1')}
                        >
                            <ListItemIcon>
                                <BurstModeIcon />
                            </ListItemIcon>
                            <ListItemText primary="page1" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="page2">
                            <ListItemIcon>
                                <BallotIcon />
                            </ListItemIcon>
                            <ListItemText primary="page2" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="page3">
                            <ListItemIcon>
                                <BallotIcon />
                            </ListItemIcon>
                            <ListItemText primary="page3" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="page4">
                            <ListItemIcon>
                                <BallotIcon />
                            </ListItemIcon>
                            <ListItemText primary="page4" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/setting">
                            <ListItemIcon>
                                <MiscellaneousServicesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Setting" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav> */}
        </Box>
    );
}
