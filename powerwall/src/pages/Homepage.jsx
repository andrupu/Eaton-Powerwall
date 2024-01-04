import React from "react";
import { NavMenu } from "../router/navMenu";
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Menu,
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
import { Pages } from "../router/routes";
import { cars } from "../database/cars"; // named import
// import mything from "../database/cars";// default import
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

  const carData = [
    {},
    { name: "Telsa Model S", carID: 5, status: "New Car" },
    { name: "Telsa Model Y", carID: 6, status: "New Car" },
    { name: "Telsa Model 3", carID: 7, status: "New Car" },
    { name: "Hyundai Ioniq", carID: 8, status: "New Car" },
  ];

  // const [open, setOpen] = React.useState(false);
  // const [anchor, setAnchor] = React.useState(null);
  // const navigate = useNavigate();

  // const handleNavOpen = (event) => {
  //   setAnchor(event.currentTarget);
  //   setOpen(true);
  // };
  // const handleNavClose = () => {
  //   setAnchor(null);
  //   setOpen(false);
  // };

  // const handleNavItemClick = (event) => {
  //   // set targetRoute equal to MenuItem innerText
  //   let targetRoute = event.target.innerText;

  //   //have switch statement to handle MenuItems with different TargetRoute names
  //   switch (targetRoute) {
  //     default:
  //     case "Homepage":
  //       targetRoute = "/";
  //       break;
  //     case "Dashboard":
  //       targetRoute = "Dashboard";
  //       break;
  //     case "Car Details":
  //       targetRoute = "Car";
  //       break;
  //   }

  //   // array.find for the targetRoute of each MenuItem
  //   const navigateTo = Pages.find(
  //     (element) => element.route === targetRoute
  //   ).route;

  //   // In the case of Car page navigate to CarID 1 by default : otherwise just navigateTo
  //   navigate(navigateTo === "Car" ? `${navigateTo}/1` : navigateTo);
  // };

  const handleAddButton = (event) => {
    setMyCarElements([...myCarElements, carData[carToAdd]]);
    // adds myCarElements (the original data) and carData (from dropdown menu) to setMyCarElements
    // ...myCarElement = the original data set added to setMyCar Elements, copied using the ... operator
    // carData[carToAdd] = finds the carToAdd and uses the values of its carData
  };

  const handleRemoveButton = (event, carID) => {
    // Remove Button is on top of ListItemButton (Button within a Button)
    // disable ListItemButton in favor of Remove Button
    event.stopPropagation(); //add event (e) to handleRemoveButton prop or CarListItem

    // Use array.filter() to create a new array
    // use !== operator to remove whereas === shows what is filtered
    const filterRemove = myCarElements.filter((car) => car.carID !== carID);
    // newVariable = arrayTOsearch.filter((haystack) => needle === haystack)

    //set the whole array (myCarElements) to the filterRemove array
    setMyCarElements(filterRemove);
  };

  return (
    <>
      <AppBar position={"sticky"}>
        <Toolbar>
          <NavMenu />
          {/* <Menu open={open} onClose={handleNavClose} anchorEl={anchor}>
            <MenuItem onClick={handleNavItemClick}>Homepage</MenuItem>
            <MenuItem onClick={handleNavItemClick}>Dashboard</MenuItem>
            <MenuItem onClick={handleNavItemClick}>Car Details</MenuItem>
          </Menu> */}
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
              handleRemoveButton={(e) => handleRemoveButton(e, car.carID)}
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
          <Button onClick={handleAddButton}>Add Car</Button>
        </Box>
      </Box>
    </>
  );
};

export const CarListItem = (props) => {
  const { name, carID, status, handleRemoveButton } = props;

  const navigate = useNavigate();

  const handleListItemClick = () => {
    navigate("car/" + carID);
  };

  //Remove Car feature
  const [carToRemove, setCarToRemove] = React.useState("");
  const handleRemoveCarChange = (event) => {
    setCarToRemove(event.target.value);
  };

  return (
    <ListItemButton
      onClick={(event) => handleListItemClick(event)}
      onChange={handleRemoveCarChange}
    >
      <ListItemText primary={name} secondary={status} />
      <ListItemIcon>
        <ElectricCarIcon />
        <Button value={carToRemove} onClick={(e) => handleRemoveButton(e)}>
          Remove
        </Button>
      </ListItemIcon>
    </ListItemButton>
  );
};
