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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Car = () => {
  let { CarID } = useParams();
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
        <span>Car by ID: {CarID} </span>
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
    </>
  );
};
