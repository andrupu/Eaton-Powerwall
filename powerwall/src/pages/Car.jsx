import React from "react";
import { NavMenu } from "../router/navMenu";
import { useParams } from "react-router-dom";
import { InfoListItem } from "@brightlayer-ui/react-components/core/InfoListItem";
import { AppBar, Box, List, Toolbar, Typography } from "@mui/material";
import { ListItemButton, ListItemText, Button } from "@mui/material";
import { CarListItem } from "./Homepage";
import { CarDataContext } from "../index";
import { ThemeSwitcher } from "../sharedComponents/ThemeSwitcher";
import { useNavigate } from "react-router-dom";

export const Car = () => {
  let { CarID } = useParams();
  const { myCarElements } = React.useContext(CarDataContext);

  // Implement array.find() to set car details to display
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const carToDisplay = myCarElements.find((element) => element.carID == CarID);
  // newVariable = arrayTOsearch.find((haystack) => needle === haystack)

  return (
    <>
      <AppBar position={"sticky"}>
        <Toolbar>
          <NavMenu />
          <Typography variant={"h6"}>Cars</Typography>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>

      <Box>
        <Box>
          {/* <CarListItem /> */}
          {myCarElements.map((car) => (
            <CarDetailsList
              name={car.name}
              status={car.status}
              carID={car.carID}
              key={car.carID}
            />
          ))}
        </Box>

        <Box
          sx={{
            margin: 3,
          }}
        >
          <span>Car by ID: {CarID} </span>
          <br />
          <span>
            Name: {carToDisplay?.name}
            {/* {cars.find((element, index, array) => element.carID == CarID)?.name} */}
          </span>
        </Box>

        <Box>
          <List>
            <InfoListItem
              title="Status"
              subtitle={carToDisplay?.status}
              // cars.find((element, index, array) => element.carID == CarID)?.status}
            />
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

export const CarDetailsList = (props) => {
  const { name, carID } = props;

  const navigate = useNavigate();

  const handleListItemClick = () => {
    navigate("car/" + carID);
    // navigate(carID);
  };

  return (
    <ListItemButton onClick={(event) => handleListItemClick(event)}>
      <ListItemText primary={name} secondary={carID} />
    </ListItemButton>
  );
};
