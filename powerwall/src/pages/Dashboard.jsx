import React from "react";
import { Hero } from "@brightlayer-ui/react-components/core/Hero";
import { HeroBanner } from "@brightlayer-ui/react-components/core/HeroBanner";
import { InfoListItem } from "@brightlayer-ui/react-components/core/InfoListItem";
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
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";

// function homepage (){
//     return 1;
// }

export const Dashboard = () => {
  return (
    <>
      <AppBar position={"sticky"}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant={"h6"}>Dashboard</Typography>
        </Toolbar>
      </AppBar>

      <Box>
        <Box>
          <HeroBanner>
            <Hero
              icon={<HomeIcon />}
              label="Efficiency"
              ChannelValueProps={{ value: "12.23", units: "kWh" }}
            />
          </HeroBanner>
        </Box>
        <Divider />
        <Box>
          <List>
            <InfoListItem
              title="HOME USAGE"
              subtitle="12.23 kWh"
              icon={<HomeIcon />}
            />
            <InfoListItem
              title="Solar Generated"
              subtitle="23.45 kWh"
              icon={<SolarPowerIcon />}
            />
            <InfoListItem
              title="USED FROM GRID"
              subtitle="12.23"
              icon={<ElectricMeterIcon />}
            />
            <InfoListItem
              title="EXPORTED TO GRID"
              subtitle="12.23 kWh"
              icon={<ElectricMeterIcon />}
            />
          </List>
        </Box>
      </Box>
    </>
  );
};
