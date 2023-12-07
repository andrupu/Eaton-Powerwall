import React from "react";
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  MenuItem,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { cars } from "../database/cars"; // named import
// import mything from "../database/cars"; // default import
// import * as starImport from "../database/cars";

const CarListItem = (props) => {
  const { name, status } = props;
  return (
    <ListItem>
      <ListItemText primary={name} secondary={status} />
      <ListItemIcon>
        <ElectricCarIcon />
      </ListItemIcon>
    </ListItem>
  );
};

export const Homepage = () => {
  const [myCarElements, setMyCarElements] = React.useState(cars);

  const [carToAdd, setCarToAdd] = React.useState("");
  const handleCarSelectChange = (event) => {
    setCarToAdd(event.target.value);
  };

  // for (let i = 0; i < cars.length; i++) {
  //   console.log(cars[i]);
  //   myCarElements.push(
  //     <ListItem>
  //       <ListItemText primary={cars[i].name} secondary={cars[i].status} />
  //       <ListItemIcon>
  //         <ElectricCarIcon />
  //       </ListItemIcon>
  //     </ListItem>
  //   );
  // }

  const handleAddButton = (event) => {
    // TO DO: Refactor if statement 1 line of code total
    if (carToAdd == 1) {
      const carData = { name: "Tesla Model S", carID: "1", status: "New Car" };
      setMyCarElements([...myCarElements, carData]);
    }
    if (carToAdd == 2) {
      const carData = { name: "Tesla Model Y", carID: "2", status: "New Car" };
      setMyCarElements([...myCarElements, carData]);
    }
    if (carToAdd == 3) {
      const carData = { name: "Tesla Model 3", carID: "3", status: "New Car" };
      setMyCarElements([...myCarElements, carData]);
    }
    if (carToAdd == 4) {
      const carData = { name: "Hyundai Ioniq", carID: "4", status: "New Car" };
      setMyCarElements([...myCarElements, carData]);
    }
  };

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

          {/* Map an array method */}
          {myCarElements.map((car, idx) => (
            <CarListItem name={car.name} status={car.status} key={idx} />
          ))}
        </List>
        <Box>
          <FormControl>
            <InputLabel>Car</InputLabel>
            <Select value={carToAdd} onChange={handleCarSelectChange}>
              <MenuItem value={1}> Tesla Model S </MenuItem>
              <MenuItem value={2}> Telsa Model Y </MenuItem>
              <MenuItem value={3}> Tesla Model 3 </MenuItem>
              <MenuItem value={4}> Hyundai Ioniq </MenuItem>
            </Select>
            {/* TO DO: Add Alert text for Validation error handling */}
            <FormHelperText error>Please Select a Car to Add</FormHelperText>
          </FormControl>
          {/* Done: Add Event Handler to get and set new car to add to Homepage */}
          <Button onClick={handleAddButton}>Add Car</Button>
        </Box>
      </Box>
    </>
  );
};
