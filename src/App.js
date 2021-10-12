import React from 'react';

import { StyledEngineProvider, CssBaseline } from '@mui/material';
import CustomThemeProvider from 'themes/CustomThemeProvider';

// routing
import Routes from './routes';


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
