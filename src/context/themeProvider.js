import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import { Box } from '@mui/material';

const mainTheme = createTheme({
  typography: {
    fontFamily: "metropolismedium",
  },
  palette: {
    primary: {
      main: '#DB3022',
      bg: '#F9F9F9',
      text: '#222222',
      white: '#FFFFFF',
    },
    secondary: {
      main: '#DB3022',
      bg: '#F9F9F9',
      text: '#9B9B9B',
      white: '#FFFFFF',
    },
    background: {
      default: "#F9F9F9"
    },
  },
});

export default function ThemeNesting({children}) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Box sx={{ bgcolor: 'primary.bg', minHeight: '100vh' }}>{children}</Box>
    </ThemeProvider>
  );
}
