import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";
//icons.............
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LensIcon from '@mui/icons-material/Lens';
//import { dark } from '@mui/material/styles/createPalette';

const data = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <Public />, label: 'Hosting' },
];


const menu = [
  { icon: <LensIcon />, label: '開胃菜與沙拉' },
  { icon: <LensIcon />, label: '前菜' },
  { icon: <LensIcon />, label: '主餐' },
  { icon: <LensIcon />, label: '甜點/飲料' },
];

const FireNav = styled(List)(({ theme }) => ({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
    disableTouchRipple: true,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
}));

const AppNav = styled(List)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: 6,

  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
    disableTouchRipple: true,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
    },
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
    },

  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },

}));

export default function Page3() {

  const [open, setOpen] = React.useState(true);
  return (

    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex' }}>
          <ThemeProvider
            theme={createTheme({
              components: {
                MuiListItemButton: {
                  defaultProps: {
                    disableTouchRipple: true,
                  },
                },
              },
              palette: {
                mode: 'dark',
                primary: { main: 'rgb(131, 10, 191)' },
                background: { paper: '#071d30' },
              },
            })}
          >
            <Paper elevation={0} sx={{ maxWidth: 256, }}>
              <FireNav component="nav" disablePadding>
                <ListItemButton component={Link} to="#customized-list">
                  <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="本季限定菜單"
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      fontWeight: 'medium',
                      letterSpacing: 0,

                    }}
                  />
                </ListItemButton>
                <Divider />
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ height: 56 }}>
                    <ListItemIcon>
                      <Home color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Project Overview"
                      primaryTypographyProps={{
                        color: 'primary',
                        fontWeight: 'medium',
                        variant: 'body2',
                      }}
                    />
                  </ListItemButton>
                  <Tooltip title="Project Settings">
                    <IconButton
                      size="large"
                      sx={{
                        '& svg': {
                          color: 'rgba(255,255,255,0.8)',
                          transition: '0.2s',
                          transform: 'translateX(0) rotate(0)',
                        },
                        '&:hover, &:focus': {
                          bgcolor: 'unset',
                          '& svg:first-of-type': {
                            transform: 'translateX(-4px) rotate(-20deg)',
                          },
                          '& svg:last-of-type': {
                            right: 0,
                            opacity: 1,
                          },
                        },
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          height: '80%',
                          display: 'block',
                          left: 0,
                          width: '1px',
                          bgcolor: 'divider',
                        },
                      }}
                    >
                      <Settings />
                      <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                    </IconButton>
                  </Tooltip>
                </ListItem>
                <Divider />
                <Box
                  sx={{
                    bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                    pb: open ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen(!open)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open ? 0 : 2.5,
                      '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                    }}
                  >
                    <ListItemText
                      primary="Build"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        lineHeight: '20px',
                        mb: '2px',
                      }}
                      secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: '16px',
                        color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                        transition: '0.2s',
                      }}
                    />
                  </ListItemButton>
                  {open &&
                    data.map((item) => (
                      <ListItemButton
                        key={item.label}
                        sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                      >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                        />
                      </ListItemButton>
                    ))}
                </Box>
              </FireNav>
            </Paper>
          </ThemeProvider>
        </Box>


      </Grid>

      {/* ======[Use app theme]================================================================================== */}
      <Grid item xs={6}>
        <Box sx={{ display: 'flex' }}>

          <Paper elevation={0} sx={{ width: '240px', maxWidth: '100%', background: 'primary.dark' }}>
            <AppNav component="nav" disablePadding >
              <ListItemButton component={Link} to="#customized-list">
                <ListItemText
                  sx={{ my: 0 }}
                  primary="功能選單"
                  primaryTypographyProps={{
                    color: 'info.contrastText',
                    variant: 'subtitle1',
                    fontFamily: '"華康細圓體","Microsoft JhengHei","Roboto","Arial"',
                    fontWeight: 'medium',
                    letterSpacing: 0,

                  }}
                />
              </ListItemButton>
              <Divider />
              <ListItem sx={{
                boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
                py: 1.5,
                px: 3,
              }}>
                <ListItemIcon>
                  <PhonelinkSetupIcon />
                </ListItemIcon>
                <ListItemText>訂位/預約</ListItemText>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton disableRipple={true} component={Link} to="#page1" sx={{ color: 'primary.light', backgroundColor: 'primary.dark' }}>
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    <RestaurantIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="本季限定菜單"
                    onClick={() => setOpen(!open)}
                    sx={{
                      '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                    }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      //color: '#fff',
                      //mr: -1,
                      //opacity: 0,
                      transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                      transition: '0.2s',
                    }}
                  />
                </ListItemButton>
              </ListItem>
              {open &&
                menu.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 5, color: 'rgba(255,255,255,.8)' }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      <LensIcon sx={{ width: '6px', height: '6px', ml: '25px' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}

            </AppNav>
          </Paper>
        </Box>


      </Grid>
    </Grid >
  );
}
