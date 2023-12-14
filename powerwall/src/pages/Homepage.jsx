import React from "react";
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
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
import { useNavigate } from "react-router-dom";
import { cars } from "../database/cars"; // named import
// import mything from "../database/cars"; // default import
// import * as starImport from "../database/cars";

export const Homepage = () => {
  //show car list variables
  const [myCarElements, setMyCarElements] = React.useState(cars);

  //Add Car Button variables
  const [carToAdd, setCarToAdd] = React.useState("");
  const handleCarSelectChange = (event) => {
    setCarToAdd(event.target.value);
  };

  // FOR LOOP to PUSH() cars values into a UI component
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
    const carData = [
      {},
      { name: "Telsa Model S", carID: 5, status: "New Car" },
      { name: "Telsa Model Y", carID: 6, status: "New Car" },
      { name: "Telsa Model 3", carID: 7, status: "New Car" },
      { name: "Hyundai Ioniq", carID: 8, status: "New Car" },
    ];

    setMyCarElements([...myCarElements, carData[carToAdd]]);
    // adds myCarElements (the original data) and carData (from dropdown menu) to setMyCarElements
    // ...myCarElement = the original data set added to setMyCar Elements, copied using the ... operator
    // carData[carToAdd] = finds the carToAdd and uses the values of its carData
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
          <ListItemButton>
            <ListItemText primary="My Home" secondary="Status" />
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </ListItemButton>

          {/* Array MAP() method to convert car values to CarListItem UI Component */}
          {myCarElements.map((car) => (
            <CarListItem
              name={car.name}
              status={car.status}
              carID={car.carID}
              key={car.carID}
            />
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

export const CarListItem = (props) => {
  const { name, carID, status } = props;

  const navigate = useNavigate();

  const handleListItemClick = () => {
    navigate("car/" + carID);
  };

  //Remove Car feature
  const [carToRemove, setCarToRemove] = React.useState("");
  const handleRemoveCarChange = (event) => {
    setCarToRemove(event.target.value);
  };

  const handleRemoveButton = (event) => {
    // setMyCarElements([...myCarElements, carData[carToRemove]]);
    carData.splice(carToRemove);
    setMyCarElements([...myCarElements, carData]);
    console.log(setMyCarElements);
    // use array.slice() or array.splice() or array.toSpliced()
  };

  return (
    <ListItemButton
      onClick={(event) => handleListItemClick(event)}
      onChange={handleRemoveCarChange}
    >
      <ListItemText primary={name} secondary={status} />
      <ListItemIcon>
        <ElectricCarIcon />
        <Button value={carToRemove} onClick={handleRemoveButton}>
          Remove
        </Button>
      </ListItemIcon>
    </ListItemButton>
  );
};
