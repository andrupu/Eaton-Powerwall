import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode"; // From React Mui Docs
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Switch from "@mui/material/Switch";
import { useContext } from "react";
import { ThemeSwitchContext } from "..";

export const ThemeSwitcher = () => {
  const { isLightTheme, setIsLightTheme } = useContext(ThemeSwitchContext);

  const handleThemeSwitcher = (event) => {
    setIsLightTheme(!event.target.checked);
    console.log(isLightTheme);
    console.log(event.target.checked);
  };

  return (
    <Switch
      icon={<LightModeIcon />}
      checkedIcon={<DarkModeIcon />}
      checked={isLightTheme ? false : true}
      onChange={handleThemeSwitcher}
    />
  );
};
