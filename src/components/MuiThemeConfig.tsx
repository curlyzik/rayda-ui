import React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const MuiThemeConfig: React.FC<React.PropsWithChildren> = ({ children }) => {
  const muitheme = createTheme({
    typography: {
      fontFamily: ['IBM Plex Sans'].join(','),
    },
  });
  return <ThemeProvider theme={muitheme}>{children}</ThemeProvider>;
};

export default MuiThemeConfig;
