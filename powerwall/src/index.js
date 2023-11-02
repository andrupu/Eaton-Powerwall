import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import foo from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Car } from './pages/Car';

// Import BLUI Theming
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';
import { Homepage } from './pages/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));

// export const Pages = [
//     {
//         title: 'Homepage',
//         route: '../pages/Homepage',
//         component: Homepage,
//     },
//     {
//         title: 'Dashboard',
//         route: '../pages/Dashboard',
//         component: Dashboard,
//     },
//     {
//         title: 'Car1',
//         route: '../pages/Car1',
//         component: Car1,
//     },
//     {
//         title: 'Car2',
//         route: '../pages/Car2',
//         component: Car2,
//     },
// ];

root.render(
  // <StyledEnginePorvider injectFirst>
    <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          {/* <Route path="../pages/Dashboard" element={<Dashboard />}> */}
          <Route path="" element={<Homepage />} />
          <Route path="Dashboard" element={<span>Hello world!</span>} />
          <Route path="Car/:CarID" element={<Car />} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    </ThemeProvider>
  // </StyledEnginePorvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
