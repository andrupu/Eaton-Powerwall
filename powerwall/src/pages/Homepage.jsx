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
import { cars } from "../database/cars"; // named import
// import mything from "../database/cars"; // default import
// import * as starImport from "../database/cars";
// function homepage (){
//     return 1;
// }

export const Homepage = () => {
  // const [car1, car2, car3, car4] = cars;
  const myCarElements = [];
  for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
    myCarElements.push(
      <ListItem>
        <ListItemText primary={cars[i].name} secondary={cars[i].status} />
        <ListItemIcon>
          <ElectricCarIcon />
        </ListItemIcon>
      </ListItem>
    );
  }

  return (
    <>
      <AppBar position={"sticky"}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant={"h6"}>Homepage</Typography>
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
            <ListItemText primary={cars[0].name} secondary="Status" />
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
          {cars.map((currentCar) => (
            <>
              <ListItem>
                <ListItemText
                  primary={currentCar.name}
                  secondary={currentCar.status}
                />
                <ListItemIcon>
                  <ElectricCarIcon />
                </ListItemIcon>
              </ListItem>
            </>
          ))}
          {myCarElements}
        </List>
      </Box>
    </>
  );
};
