import { createTheme } from '@mui/material/styles';

//botanical theme
const botanical = createTheme({
    palette: {
        //mode: 'dark',
        primary: {
            main: '#6e8c75',
            dark: '#415245',
        },
        secondary: {
            main: '#787d7a',
        },
        warning: {
            main: '#d6922d',
        },
        info: {
            main: '#37607f',
        },
        success: {
            main: '#4b5c6b',
            light: '#9bb3c7',
            dark: '#39444d',
        },
        background: {
            paper: '#ced9d9',
            default: '#f2ffff',
        },
    },
});


export default botanical;