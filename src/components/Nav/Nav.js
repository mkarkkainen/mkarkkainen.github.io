import React, { useState } from "react";
import { VscMail } from "react-icons/vsc";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Tab,
} from "@material-ui/core";
import logo from "../../assets/images/slogo.svg";
import useStyles from "./styles";

const Nav = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="a logo"
            style={{ flexGrow: 1, justifyContent: "flex-start" }}
          >
            <img src={logo} alt="logo" />
          </IconButton>
          <Tabs
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
            value={value}
            onChange={handleChange}
            style={{ flexGrow: 1, margin: "auto" }}
          >
            <Tab className={classes.links} label="About" href="#" />
            <Tab className={classes.links} label="Projects" href="#" />
          </Tabs>
          <IconButton>{<VscMail className={classes.btn} />}</IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
