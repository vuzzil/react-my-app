//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider, CssBaseline } from '@mui/material';

//theme
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import colors from 'assets/scss/colors.module.scss';
import CustomThemeProvider from 'themes/CustomThemeProvider';

// routing
import Routes from './routes';

// const theme = createTheme({
//   palette: {

//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//       light: green[50],
//       dark: green[600],
//       contrastText: '#fff',
//     },
//     neutral: {
//       main: '#64748B',
//       contrastText: '#fff',
//     },
//   },
// });


// console.log(colors.theme_light_borderDark);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CustomThemeProvider>
        <CssBaseline />
        <Routes />
      </CustomThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
