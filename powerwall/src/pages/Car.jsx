import React from "react";
import { useParams } from "react-router-dom";
import { InfoListItem } from "@brightlayer-ui/react-components/core/InfoListItem";
import {
  AppBar,
  Box,
  List,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Car = () => {
  let { CarID } = useParams();
  const [car, setCar] = React.useState("");

  const handleButton = (event) => {
    // get new Car to add
    setCar(event.addCar.value);

    // set CarID to next ID Number
    CarID(event.addCar.CarID + 1);
  };

  //   let params = useParams();
  //   console.log(params);

  return (
    <>
      <AppBar position={"sticky"}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant={"h6"}>Cars</Typography>
        </Toolbar>
      </AppBar>

      <Box>
        <Box
          sx={{
            margin: 3,
          }}
        >
          <Box>
            <FormControl>
              <InputLabel>Car</InputLabel>
              <Select id="addCar">
                <MenuItem value={1}>Tesla Model S </MenuItem>
                <MenuItem value={2}>Telsa Model Y </MenuItem>
                <MenuItem value={3}>Tesla Model 3 </MenuItem>
                <MenuItem value={4}>Hyundai Ioniq</MenuItem>
              </Select>
              {/* TO DO: Add Alert text for Validation error handling */}
              <FormHelperText error>Please Select a Car to Add</FormHelperText>
            </FormControl>
            {/* TO DO: Add Event Handler to get and set new car to add to Homepage */}
            <Button onClick={handleButton}>Add Car</Button>
          </Box>
          <span>Car by ID: {CarID} </span>
          <span>Name: {car} </span>
        </Box>

        <Box>
          <List>
            <InfoListItem title="Battery Type" subtitle="Long Range" />
            <InfoListItem title="Range (EPA est.)" subtitle="315 Miles" />
            <InfoListItem title="Acceleration" subtitle="3.4s 0-60 mph" />
            <InfoListItem title="Drive" subtitle="All Wheel Drive" />
            <InfoListItem title="Weight" subtitle="4,048 lbs" />
            <InfoListItem title="Cargo Size" subtitle="23 Cubic Feet" />
            <InfoListItem title="Wheels" subtitle="20 inches" />
            <InfoListItem title="Seating" subtitle="5 Adults" />
            <InfoListItem
              title="Display Screen"
              subtitle="15 inch Center Touchsreen"
            />
          </List>
        </Box>
      </Box>
    </>
  );
};
