import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode"; // From React Mui Docs
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Switch from "@mui/material/Switch";
import { useContext } from "react";
import { ThemeSwitchContext } from "..";
// import ThemeSwitchProvider from "index.js";

export const ThemeSwitcher = () => {
  const { isLightTheme, setIsLightTheme } = useContext(ThemeSwitchContext);

  const handleThemeSwitcher = (event) => {
    setIsLightTheme(!event.target.checked);
    console.log(isLightTheme);
    console.log(event.target.checked);
    // isLightTheme = setIsLightTheme;
  };

  return (
    <Switch
      icon={<LightModeIcon />}
      checkedIcon={<DarkModeIcon color="error" />}
      color="warning"
      checked={isLightTheme ? false : true}
      onChange={handleThemeSwitcher}
      // sx={{ color: 'warning',
      //       backgroundColor: 'error',}}
    />
  );
};
