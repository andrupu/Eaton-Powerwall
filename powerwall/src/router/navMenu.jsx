import React from "react";
import { useNavigate } from "react-router-dom";
import { Pages } from "./routes";
import { Menu, MenuItem } from "@mui/material";

export const NavMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState(null);
  const navigate = useNavigate();

  const handleNavOpen = (event) => {
    setAnchor(event.currentTarget);
    setOpen(true);
  };
  const handleNavClose = () => {
    setAnchor(null);
    setOpen(false);
  };

  const handleNavItemClick = (event) => {
    // set targetRoute equal to MenuItem innerText
    let targetRoute = event.target.innerText;

    //have switch statement to handle MenuItems with different TargetRoute names
    switch (targetRoute) {
      default:
      case "Homepage":
        targetRoute = "/";
        break;
      case "Dashboard":
        targetRoute = "Dashboard";
        break;
      case "Car Details":
        targetRoute = "Car";
        break;
    }

    // array.find for the targetRoute of each MenuItem
    const navigateTo = Pages.find(
      (element) => element.route === targetRoute
    ).route;

    // In the case of Car page navigate to CarID 1 by default : otherwise just navigateTo
    navigate(navigateTo === "Car" ? `${navigateTo}/1` : navigateTo);
  };

  return (
    <NavMenu open={open} onClose={handleNavClose} anchorEl={anchor}>
      <MenuItem onClick={handleNavItemClick}>Homepage</MenuItem>
      <MenuItem onClick={handleNavItemClick}>Dashboard</MenuItem>
      <MenuItem onClick={handleNavItemClick}>Car Details</MenuItem>
    </NavMenu>
  );
};
