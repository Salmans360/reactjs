import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#6921c4',
      dark: '#6921c4',
      contrastText: '#fff',
      success: '#31c274',
      heading: '#29264A',
    },
    primaryButton: {
      main: 'rgba(105, 33, 196, .1)',
      contrastText: '#6921c4',
    },
    primarylight: {
      main: '#6921c4',
      contrastText: '#fff',
    },
    cancelButton: {
      main: 'rgba(109, 125, 139, 0.3)',
      contrastText: '#6D7D8B',
    },
    disabledButton: {
      main: 'rgba(109, 125, 139, 0.2)',
      contrastText: 'rgba(109, 125, 139, 0.4)',
    },
    yellow: {
      deep: '#FF1493',
      hot: '#FF69B4',
      medium: '#C71585',
      pale: '#DB7093',
      light: '#FFB6C1',
    },
    secondary: {
      main: '#ff6019',
    },
    secondaryButton: {
      main: '#FFD9C8',
      contrastText: '#ff6019',
    },
    warningButton: {
      main: 'rgba(255, 25, 25, 0.2)',
      contrastText: '#ff3636',
    },
    success: {
      main: '#31c274',
    },
    successChip: {
      main: 'rgba(12, 200, 87, 0.2)',
      contrastText: '#31c274',
    },
    error: {
      main: '#ff3636',
    },
    disabled: {
      main: '#A4A8AC',
      light: '#6D7D8B',
      hot: '#545B7D',
      black: '#000',
    },
    disSelect: {
      contrastText: '#6D7D8B',
      main: '#F4F7FB',
    },
    inactive: {
      main: '#F7F8FB',
      contrastText: '#A6BCBF',
    },
    copyRight: {
      primary: '#6D7D8B',
    },
    publicApiKey: {
      primary: '#e2e3e3',
    },
  },
  typography: {
    h1: {
      fontSize: '48px',
      fontWeight: 'bold',
      lineHeight: '48px',
    },
    h2: {
      fontSize: '36px',
      fontWeight: 'bold',
      lineHeight: '48px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.2rem',
    },
    h4: {
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '19px',
    },
    h5: {
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '14px',
    },
    h6: {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
    },
    h7: {
      fontWeight: '500',
      fontSize: '13px',
      lineHeight: '15px',
    },
    listSecondary: {
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '15px',
    },
    tableHeading: {
      fontWeight: '500',
      fontSize: '11px',
      lineHeight: '13px',
    },
    tableSemiHeading: {
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '14px',
    },
    listText: {
      fontSize: '20px',
      lineHeight: '40px',
      fontWeight: '400',
    },
    subtitle1: {
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: '500',
    },
    mainLabel: {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
    },
    labelSmall: {
      fontSize: '13px',
      fontWeight: '400',
      lineHeight: '18px',
    },
    helperText: {
      fontSize: '.75rem',
      fontWeight: '400',
      lineHeight: '1.66',
      letterSpacing: '0.03333em',
    },
  },
});

export default theme;
