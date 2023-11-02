import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Import BLUI Theming
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <StyledEnginePorvider injectFirst>
    <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
      <CssBaseline/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  // </StyledEnginePorvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
