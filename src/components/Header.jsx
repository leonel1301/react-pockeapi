import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Outlet } from "react-router";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            POKEAPI
          </Typography>
          <Avatar
            alt="Pokemon"
            src="https://e.rpp-noticias.io/xlarge/2019/01/05/082508_735016.jpg"
          />
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: '20px' }}>
        <Outlet />
      </Box>
    </Box>
  );
};
