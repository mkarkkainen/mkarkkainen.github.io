import React from "react";
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import { makeStyles } from "@material-ui/core/styles";

import threeMachetes from '../../assets/images/3machetes.svg'

import Logos from "../../assets/images/KSLogos.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  texts: {
    width: '75%',
    padding: theme.spacing(8, 0, 6),
  },
  buttons: {
    border: '2px solid black',
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
  },
  screens: {
    width: "80%",
    margin: "16px"
  },
  containers: {
      padding: "4%"
  },
  machetes: {
    width: '100px',
    height: '100px'
  }
}));

const Kokkosaari = () => {
  const classes = useStyles();

  return (
    <>
      <main>
            <Container align="center" >
                <Typography align="center" variant="h6">MIIKKA KÄRKKÄINEN</Typography>
                <Link href="/projects"><img src={threeMachetes} className={classes.machetes} alt="logo" /></Link>
            </Container>
        <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.containers}
        >
            <Grid item maxWidth="sm" className={classes.texts}>
                <Typography
                component="h6"
                variant="h6"
                align="center"
                color="textPrimary"
                style={{ paddingBottom: "4%" }}
                gutterBottom
                >
                <strong>Kokkosaari - Product Designer</strong>
                </Typography>
                <hr />
                <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                paragraph
                >
                    Kokkosaari is an authentic italian brick oven pizza restaurant on a remote island in Finland.
                </Typography>
                <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                paragraph
                >
                    The logo design of Restaurant Kokkosaari is the beginning of a full website project due Summer 2021.
                </Typography>
            </Grid>

            <Grid item align="center" style={{paddingBottom: '4%'}}>
                <img className={classes.screens} src={Logos} alt="ss" />
            </Grid>

            <Grid item >
                <Button variant="outlined" color="default" className={classes.buttons}>
                    <Link style={{ color: 'black' }} href="/Projects">BACK</Link>
                </Button>
            </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Kokkosaari;