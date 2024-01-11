import React from "react";
import { NavMenu } from "../router/navMenu";
import { Hero } from "@brightlayer-ui/react-components/core/Hero";
import { HeroBanner } from "@brightlayer-ui/react-components/core/HeroBanner";
import { InfoListItem } from "@brightlayer-ui/react-components/core/InfoListItem";
import {
  AppBar,
  Box,
  List,
  ListItemButton,
  Toolbar,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import { useTheme } from "@mui/material/styles";
import { ThemeSwitcher } from "../sharedComponents/ThemeSwitcher";

// function homepage (){
//     return 1;
// }

const heroAvatarStyles = {
  display: "flex",
  border: "3px solid",
  borderRadius: "50%",
  height: "150px",
  width: "150px",
  justifyContent: "center",
  alignItems: "center",

  // WIP: create illumination effect
  boxShadow: `0 0 0 2px rgba(100, 100, 100, 0.1),
              0 0 0 4px rgba(255, 255, 255, 0.2),
              0 0 0 6px rgba(255, 255, 255, 0.3),
              0 0 0 8px rgba(200, 200, 200, 0.4);`,
};

export const Dashboard = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar position={"sticky"}>
        <Toolbar>
          <NavMenu />
          <Typography variant={"h6"}>Dashboard</Typography>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            padding: "15px",
            borderRight: `3px solid ${theme.palette.text.primary}`,
            minHeight: "calc(100vh - 64px)",
            [theme.breakpoints.down("sm")]: {
              minHeight: "calc(100vh - 56px)",
            },
          }}
        >
          <Box sx={heroAvatarStyles}>
            <Hero
              icon={<SolarPowerIcon />}
              label="Top Hero"
              ChannelValueProps={{ value: "12.23", units: "kWh" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Box sx={heroAvatarStyles}>
              <Hero
                icon={<ElectricMeterIcon />}
                label="Left Hero"
                ChannelValueProps={{ value: "12.23", units: "kWh" }}
              />
            </Box>
            <Box sx={heroAvatarStyles}>
              <Hero
                icon={<HomeIcon />}
                label="Right Hero"
                ChannelValueProps={{ value: "12.23", units: "kWh" }}
              />
            </Box>
          </Box>
          <Box sx={heroAvatarStyles}>
            <Hero
              icon={<ElectricMeterIcon />}
              label="Bottom Hero"
              ChannelValueProps={{ value: "12.23", units: "kWh" }}
            />
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            flex: 1,
          }}
        >
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
