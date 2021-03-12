import React from 'react';
import { Typography, Box, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { makeStyles } from '@material-ui/core/styles';


import logo from "../../assets/images/slogo.svg";

const useStyles = makeStyles((theme) => ({
    socials: {
        margin: '8px',
        color: 'black'
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <div style={{ width: "100%", padding: "4%", backgroundColor: "#EAEAEA"}}>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography align="center">Handcrafter by Me © 2021</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">

              <Link variant="body1" href="https://github.com/mkarkkainen">
                <GitHubIcon className={classes.socials} />
              </Link>
              <Link variant="body1" href="https://www.linkedin.com/in/miikkakarkkainen/">
                <LinkedInIcon className={classes.socials} />
              </Link>
              <Link variant="body1" href="mailto:miikkak@tuta.io">
                <MailOutlineIcon className={classes.socials} />
              </Link>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img src={logo} alt="logo" style={{ padding: "4px"}} />
            </Box>
        </div>
    )
}

export default Footer;