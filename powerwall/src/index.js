import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Dashboard } from './pages/Dashboard';
import { Car } from './pages/Car';
import { cars } from "./database/cars";
import { createContext } from 'react';

// Import BLUI Theming
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const ThemeSwitchContext = createContext("");
export const ThemeSwitchProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = React.useState(true);

  return (
    <ThemeProvider theme={createTheme(isLightTheme ? BLUIThemes.blue : BLUIThemes.blueDark)}>
       <ThemeSwitchContext.Provider value={{isLightTheme, setIsLightTheme}}>{props.children}</ThemeSwitchContext.Provider>
        
    </ThemeProvider>
  )
}

// Use ContextProvider to Pass data down from the root parent
export const CarDataContext = createContext("");
// Not allowed to use React Hooks at top-level index
// So create UI ELement and nest ContextProvider in it
const CarDataProvider = ({children}) => {

        const [myCarElements, setMyCarElements] = React.useState(cars);

        return (
            <CarDataContext.Provider value={{myCarElements, setMyCarElements}}>
                {children}
            </CarDataContext.Provider>
        )
    }

root.render(
  // <StyledEnginePorvider injectFirst>
  <ThemeSwitchProvider>
    {/* <ThemeProvider theme={createTheme(BLUIThemes.blue)}> */}
      <CarDataProvider>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          {/* <Route path="../pages/Dashboard" element={<Dashboard />}> */}
          <Route path="" element={<Homepage/> } />
          <Route path="Dashboard" element={<Dashboard/> } />
          <Route path="Car/:CarID" element={<Car/> } />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
      </CarDataProvider>
    {/* </ThemeProvider> */}
    </ThemeSwitchProvider>
  // </StyledEnginePorvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
