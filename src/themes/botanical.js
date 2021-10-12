import { createTheme } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';

//botanical theme
const botanical = createTheme({
    palette: {
        mode: 'dark',
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
    },
});


export default botanical;