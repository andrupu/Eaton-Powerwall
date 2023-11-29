import React from "react";
import { useParams } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
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
          <Typography variant={"h6"}>Dashboard</Typography>
        </Toolbar>
      </AppBar>

      <Box>
        <span>Car by ID: {CarID} </span>
      </Box>
    </>
  );
};
