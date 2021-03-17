import React from "react";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from "../../assets/images/slogo.svg";
import profile from '../../assets/images/me.jpg';

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    marginBottom: '5%'
  },
  image: {
    backgroundImage: `url(${profile})`,
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
    color: 'black',
    border: '2px solid black'
  },
  name: {
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
                
                <Link href="/projects"><img src={logo} alt="logo" /></Link>
              
            </Grid>

            <Grid item>
              <Typography variant="h2" className={classes.mid}>
              A UX/UI Designer & <br />
              Front-end Developer <br />
              from Finland. <br />
              </Typography>

              <Typography variant="body1" className={classes.mid}>
                Enthusiastic about great user experiences and the latest technology in web development. <br />
                Currently based in Costa Rica. <br />
                <strong>Pura Vida!</strong><br />
              </Typography>

              <Button variant="outlined" color="default" className={classes.buttons}>
                <Link style={{ color: 'black' }} href="mailto:miikkak@tuta.io">CONTACT</Link>
              </Button>

              <Button variant="outlined" color="default" className={classes.buttons}>
                <Link style={{ color: 'black' }} href="/projects">PORTFOLIO</Link>
              </Button>

            </Grid>

            <Grid item>
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