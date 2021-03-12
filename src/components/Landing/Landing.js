import React from "react";
import Typewriter from "typewriter-effect";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from "../../assets/images/slogo.svg";

import { CssBaseline, Grid, Typography, Paper, Link, Button, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    marginBottom: '5%'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
  },
  socials: {
    margin: '8px',
    color: 'black'
  },
  mid: {
    margin: '8px'
  },
  buttons: {
    marginTop: '4%',
    marginLeft: '1%',
    border: '2px solid black'
  },
  name: {
    borderBottom: '1px solid black',
    width: '30%'
  }
}));

const Landing = () => {
  const classes = useStyles();

  return (

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>

            <Grid item>
              <Typography variant="h6" className={classes.name}>
                MIIKKA KÄRKKÄINEN
              </Typography>
              <IconButton>
                <img src={logo} alt="logo" />
              </IconButton>
            </Grid>

            <Grid item>
              <Typography variant="h2" className={classes.mid}>
                {/* <Typewriter
                options={{
                  autoStart: true,
                  delay: 75,
                  loop: false,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(3000)
                    .typeString("A UX/UI Designer & Front-end Developer from Finland.")
                    .start();
                }}
              /> */}
              A UX/UI Designer & <br />
              Front-end Developer <br />
              from Finland. <br />
              </Typography>

              <Typography variant="body1" className={classes.mid}>
                Enthusiastic about great user experiences and the latest technology in web development. <br />
                Currently based in Costa Rica. <strong>Pura Vida!</strong><br />
                Let’s create! <br />
              </Typography>

              <Button variant="outlined" color="default" className={classes.buttons}>
                <Link href="mailto:miikkak@tuta.io">CONTACT</Link>
              </Button>

              <Button variant="outlined" color="default" className={classes.buttons}>
                <Link href="#">PORTFOLIO</Link>
              </Button>

            </Grid>

            <Grid item >
              <Link variant="body1" href="https://github.com/mkarkkainen">
                <GitHubIcon className={classes.socials} />
              </Link>
              <Link variant="body1" href="https://www.linkedin.com/in/miikkakarkkainen/">
                <LinkedInIcon className={classes.socials} />
              </Link>
            </Grid>

          </div>
        </Grid>
      </Grid>

  );
};

export default Landing;