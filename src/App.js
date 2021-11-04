import React from 'react';

import { StyledEngineProvider, CssBaseline } from '@mui/material';
import CustomThemeProvider from 'themes/CustomThemeProvider';

// routing
import Routes from './routes';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  return (
    <StyledEngineProvider injectFirst>
      <CustomThemeProvider>
        <CssBaseline />
        <Routes isLoggedIn={isLoggedIn} />
      </CustomThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
