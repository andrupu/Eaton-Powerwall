import React from "react";
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";

// function homepage (){
//     return 1;
// }

export const Homepage = () => {
  return (
    <>
      <AppBar position={"sticky"}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant={"h6"}>Hompage</Typography>
        </Toolbar>
      </AppBar>

      <Box>
        <List>
          <ListItem>
            <ListItemText primary="My Home" secondary="Status" />
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemText primary="Car 1" secondary="Status" />
            <ListItemIcon>
              <ElectricCarIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemText primary="Car 2" secondary="Status" />
            <ListItemIcon>
              <ElectricCarIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
