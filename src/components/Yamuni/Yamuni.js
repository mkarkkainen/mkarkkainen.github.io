import React from "react";
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles";
import threeMachetes from '../../assets/images/3machetes.svg'
import Screen1 from "../../assets/images/YT1.jpg";
import Screen2 from "../../assets/images/YT2.jpg";
import Screen3 from "../../assets/images/YT3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  texts: {
      width: "75%",
      padding: theme.spacing(8, 0, 6),

  },
  buttons: {
    border: '2px solid black'
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

const Yamuni = () => {
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
                <strong>Fundación Yamuni Tabush - Web Designer</strong>
                </Typography>
                <hr />

                <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                paragraph
                >
                As a <strong>web designer</strong>, my responsibility was to provide high fidelity wireframes and aid in information architecture.
                </Typography>
            </Grid>

            <Grid item align="center" style={{paddingBottom: '4%'}} >
                <img className={classes.screens} src={Screen1} alt="ss" />
                <img className={classes.screens} src={Screen2} alt="ss" />
                <img className={classes.screens} src={Screen3} alt="ss" />
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

export default Yamuni;