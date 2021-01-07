import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  makeStyles,
  Button
} from "@material-ui/core";
import logo from "../../assets/images/slogo.svg";
//import useStyles from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
}))

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm={4}>
            <img src={logo} alt="logo" style={{ padding: "4px"}} />
          </Grid>
          <Grid item sm></Grid>
          <Grid item m={4}>
            <Button href="#" variant="text" onClick={() => console.log("Clicked ABOUT")}>
              About
            </Button>
            <Button href="#" variant="text" onClick={() => console.log("Clicked PROJECTS")}>
              Projects
            </Button>
            <Button href="#" variant="text" style={{ marginRight: 16 }} onClick={() => console.log("Clicked SKILLS")}>
              Skills
            </Button>
            <Button href="#" variant="contained" className={classes.btn}>
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;