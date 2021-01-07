import { Typography, Box } from '@material-ui/core';
import React from 'react';
import logo from "../../assets/images/slogo.svg";

const Footer = () => {
    return (
        <div style={{ width: "100%", padding: "4%", backgroundColor: "#EAEAEA"}}>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography align="center">Handcrafter by Me © 2021</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img src={logo} alt="logo" style={{ padding: "4px"}} />
            </Box>
        </div>
    )
}

export default Footer;