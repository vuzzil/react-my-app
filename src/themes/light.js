import React from 'react';

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

//default 'light' theme
const light = createTheme({
    palette: {

        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
            light: green[50],
            dark: green[600],
            contrastText: '#fff',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});


export default light;