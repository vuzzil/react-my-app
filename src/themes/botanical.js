import { createTheme } from '@mui/material/styles';

//botanical theme
const botanical = createTheme({
    palette: {
        //mode: 'dark',
        primary: {
            main: '#6e8c75',
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
            main: '#607485',
        },
        background: {
            paper: '#ced9d9',
            default:'#f2ffff',
        },
    },
});


export default botanical;