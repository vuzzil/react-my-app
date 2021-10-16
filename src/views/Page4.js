import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
//icons...............................................
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';

const categories = [
    {
        id: '前台',
        children: [
            { id: '訂位/預約', icon: <PeopleIcon />, active: true, },
            { id: '菜單', icon: <DnsRoundedIcon /> },
            { id: '點菜狀況查詢', icon: <PermMediaOutlinedIcon /> },
            { id: '顧客滿意度調查', icon: <PublicIcon /> },

        ],
    },
    {
        id: '後台',
        children: [
            { id: '出餐狀況查詢', icon: <SettingsIcon /> },
            { id: '營運統計', icon: <PhonelinkSetupIcon /> },
            { id: '菜單維護', icon: <TimerIcon /> },
            { id: '顧客資料維護', icon: <SettingsInputComponentIcon /> },                      
            { id: '食材資料維護', icon: <SettingsEthernetIcon /> },
            { id: '供應商資料維護', icon: <SettingsInputComponentIcon /> },  
        ],
    },
];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};


const MenuList = styled(List)(({ theme }) => ({
    backgroundColor: '#081627',
    borderRadius: 6,


    '& .MuiListItemButton-root': {
        //color: '#4fc3f7',
        color: '#99d066',
        disableTouchRipple: true,
    },
    '& .MuiListItemText-root': {
        fontSize: 14,
        fontWeight: theme.typography.fontWeightMedium,
    },
    '& .MuiListItemIcon-root': {
        color: 'inherit',
        minWidth: 'auto',
        marginRight: theme.spacing(2),
        '& svg': {
            fontSize: 20,
        },
    },
}));

export default function Page4(props) {
    const { ...other } = props;

    return (

        <Box sx={{ display: 'flex' }}  {...other}>
            <MenuList component="nav" disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    餐酒館系統
                </ListItem>
                <ListItem sx={{ ...item, ...itemCategory }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>功能選單</ListItemText>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}

                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </MenuList>
        </Box>
    );
}