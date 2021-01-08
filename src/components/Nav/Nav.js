import React, { useState } from "react";
import { FaNode } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  makeStyles,
  Button,
  Paper,
  Tabs,
  Tab
} from "@material-ui/core";
import logo from "../../assets/images/slogo.svg";
//import useStyles from "./styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#EAEAEA",
//     height: 100,
//     display: "flex",
//     justifyContent: "center",
//     alignContent: "center"
//   },
//   cbtn: {
//     background: "#EF5C7E",
//     border: 0,
//     fontSize: 16,
//     borderRadius: 3,
//     boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034)",
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     '&:hover': {
//       backgroundColor: "#5CEF8F"
//     }
//   },
//   btn: {
//     color: '#353535',
//   }
// }))

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#EAEAEA",  
  },
  links: {
    color: "#353535",
    transition: "0.3s ease",
    '&:hover': {
      opacity: 1,
    }
  },
  btn: {
    color: "#353535"
  }
}))

const Nav = () => {
  const classes = useStyles();
  const [ value, setValue ] = useState(0);

  const handleChange = (event, newValue) => {
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
                backgroundColor: "#A2A2A2"
              }
            }}
            value={value}
            onChange={handleChange}
            style={{ flexGrow: 1, margin: "auto"}}>

            <Tab className={classes.links} label="About" href="#" />
            <Tab className={classes.links} label="Projects" href="#" />

          </Tabs>
          <IconButton>
            {<VscMail className={classes.btn} />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav;