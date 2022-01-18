import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import gccLogo from "static/gcclogo.png";

const NavigationBar = (props) => {
  const { window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="static">
        <Toolbar>
          <Box
            disableRipple
            disableFocusRipple
            edge="start"
            aria-label="menu"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/">
              <img height={85} alt="nav-logo" src={gccLogo} />
            </Link>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default NavigationBar;
