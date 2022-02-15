import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5E79BB',
      contrast: '#ffffff',
    },
    secondary: {
      main: '#D48140',
      contrast: '#ffffff',
      contrastText: '#ffffff',
    },
    text: {
      main: '#333439',
      gray: '#7D7E85',
    },
    background: {
      default: '#F5F2EB',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  }
});

theme.typography.h1 = {
  fontSize: '2rem',
  fontWeight: 800,
  [theme.breakpoints.up('md')]: {
    fontSize: '3.4rem',
  },
  color: theme.palette.primary.main,
};

theme.typography.h2 = {
  fontSize: '1.4rem',
  fontWeight: 600,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
  color: theme.palette.primary.main,
};

theme.typography.h3 = {
  fontSize: '1.2rem',
  fontWeight: 600,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
  color: theme.palette.primary.main,
};

theme.typography.h4 = {
  fontSize: '0.8rem',
  fontWeight: 'medium',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  color: '#333439'
};

theme.typography.body1 = {
  fontSize: '0.8rem',
  fontWeight: 'reguler',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  color: '#333439'
};


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
