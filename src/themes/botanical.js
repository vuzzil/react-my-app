import React from 'react';

import { createTheme } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';

//botanical theme
const botanical = createTheme({
    palette: {

        primary: {
            main: green[500],
            light: green[50],
            dark: green[600],
            contrastText: '#fff',
        },
        secondary: {
            main: blue[500],
            light: blue[50],
            dark: blue[600],
            contrastText: '#fff',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});


export default botanical;