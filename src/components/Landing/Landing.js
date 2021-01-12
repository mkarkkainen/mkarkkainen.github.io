import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";

import {
  Container,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@material-ui/core";

import useStyles from "./styles";

const Landing = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item>
          <ReactTypingEffect
            staticText={
              <Typography variant="h3">hi, my name is miikka</Typography>
            }
            text={["ux/ui designer.", "frontend developer."]}
            cursorRenderer={(cursor) => (
              <Typography variant="h3">{cursor}</Typography>
            )}
            speed={80}
            eraseSpeed={0.1}
            eraseDelay={1500}
            displayTextRenderer={(text, i) => {
              return (
                <Typography variant="h3">
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return <span key={key}>{char}</span>;
                  })}
                </Typography>
              );
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
// const speeds = {
//   deleteSpeed: 30,
//   typeSpeed: 150,
// };

// const Typewriter = ({ messages, heading }) => {
//   const [typeState, setTypeState] = useState({
//     text: "",
//     message: "",
//     isDeleting: false,
//     loopNum: 0,
//     typingSpeed: speeds.typeSpeed,
//   });

//   useEffect(() => {
//     let timer = "";
//     const handleType = () => {
//       setTypeState((currentState) => ({
//         ...currentState,
//         text: getCurrentText(currentState),
//         typingSpeed: getTypingSpeed(currentState),
//       }));
//       timer = setTimeout(handleType, typeState.typingSpeed);
//     };
//     handleType();
//     return () => clearTimeout(timer);
//   }, [typeState.isDeleting]);

//   useEffect(() => {
//     if (!typeState.isDeleting && typeState.text === typeState.message) {
//       setTimeout(() => {
//         setTypeState((currentState) => ({
//           ...currentState,
//           isDeleting: true,
//         }));
//       }, 500);
//     } else if (typeState.isDeleting && typeState.text === "") {
//       setTypeState((currentState) => ({
//         ...currentState,
//         isDeleting: false,
//         loopNum: currentState.loopNum + 1,
//         message: getMessage(currentState, messages),
//       }));
//     }
//   }, [typeState.text, typeState.message, typeState.isDeleting, messages]);

//   const getCurrentText = (currentState) => {
//     return currentState.isDeleting
//       ? currentState.message.substring(0, currentState.text.length - 1)
//       : currentState.message.substring(0, currentState.text.length + 1);
//   };

//   const getMessage = (currentState, data) => {
//     return data[Number(currentState.loopNum) % Number(data.length)];
//   };

//   const getTypingSpeed = (currentState) => {
//     return currentState.isDeleting ? speeds.typeSpeed : speeds.deleteSpeed;
//   };

//   return (
//     <Container justify="center">
//       <Typography variant="h1">
//         {heading}&nbsp;
//         <span>{typeState.text}</span>
//         <span id="cursor" />
//       </Typography>
//     </Container>
//   );
// };

// export default Typewriter;
