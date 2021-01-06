import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import logo from "../../assets/images/slogo.svg";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>

          <Toolbar className={classes.leftSide}>
            <IconButton edge="start">
              <img src={logo} alt="logo" />
            </IconButton>
            <Typography variant="body1" className={classes.title}>MIIKKA KÄRKKÄINEN</Typography>
          </Toolbar>


          <div className={classes.grow} />

          <Toolbar className={classes.links}>
            <div className={classes.button}>
              <IconButton>
                <Typography className={classes.link} variant="body1">Workflow</Typography>
              </IconButton>
            </div>
            <div className={classes.button}>
              <IconButton>
                <Typography className={classes.link} variant="body1">Projects</Typography>
              </IconButton>
            </div>
            <div className={classes.button}>
              <IconButton>
                <Typography className={classes.link} variant="body1">About</Typography>
              </IconButton>
            </div>
            <div className={classes.button}>
              <IconButton>
                <Typography className={classes.link} variant="body1">Contact Me</Typography>
              </IconButton>
            </div>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
