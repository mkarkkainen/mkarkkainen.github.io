import React, { useState, useEffect } from "react";
//import ReactTypingEffect from "react-typing-effect";
import Typewriter from "typewriter-effect";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";

const Landing = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Typography variant="h4" className={classes.wrap}>
        <Typewriter
          options={{
            autoStart: true,
            delay: 75,
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Hi, my name is <span style='color: #353535'>Miikka</span>."
              )
              .pauseFor(500)
              .typeString("<br />")
              .typeString(
                "I'm a UX/UI <span style='color: #353535'>Designer</span>"
              )
              .pauseFor(500)
              .typeString("<br />")
              .typeString(
                "and Front-end <span style='color: #353535'>Developer</span>."
              )
              .start();
          }}
        />
      </Typography>
    </Grid>
  );
};

export default Landing;

//      <Grid container className={classes.root}>
//        <Grid item>
//          <ReactTypingEffect
//            staticText={
//              <Typography variant="h3">hi, my name is miikka</Typography>
//            }
//            text={["ux/ui designer.", "frontend developer."]}
//            cursorRenderer={(cursor) => (
//              <Typography variant="h3">{cursor}</Typography>
//            )}
//            speed={80}
//            eraseSpeed={0.1}
//            eraseDelay={1500}
//            displayTextRenderer={(text, i) => {
//              return (
//                <Typography variant="h3">
//                  {text.split("").map((char, i) => {
//                    const key = `${i}`;
//                    return <span key={key}>{char}</span>;
//                  })}
//                </Typography>
//              );
//            }}
//          />
//        </Grid>
//      </Grid>
