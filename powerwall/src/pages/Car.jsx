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
import { cars } from "../database/cars";
import {
  handleListItemClick,
  CarListItem,
  setMyCarElements,
} from "../pages/Homepage";

export const Car = () => {
  let { CarID } = useParams();
  const [car, setCar] = React.useState("");

  // TO DO: implement array.find() to set car details to display
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  // const isCar(carDetails) {
  //   return carDetails.carID == [carID];
  // }

  // const handleSelectCarButton = (event) => {
  //   get selected car to display
  // };

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
          <span>Car by ID: {CarID} </span>
          <br />
          <span>
            Name:{" "}
            {cars.find((element, index, array) => element.carID == CarID)?.name}
          </span>
        </Box>

        <Box>
          <List>
            <InfoListItem title="Status" subtitle="Something went right!" />
            {/* 
            <InfoListItem title="Battery Type" subtitle={cars.status} />
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
            */}
          </List>
        </Box>
      </Box>
    </>
  );
};
