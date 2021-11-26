import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
      light: '#f7f5e1',
        main: '#5d4037',
        dark: '#321911',
        contrastText: '#fff',
      },
      secondary: {
        light: '#39796b',
        main: '#004d40',
        dark: '#00251a',
        contrastText: '#fff',
      },
      action: {
        disabled: 'rgba(253, 253, 253, 0.46)',
        disabledBackground: 'rgba(93, 64, 55, 0.56)',
      },
    },
  });