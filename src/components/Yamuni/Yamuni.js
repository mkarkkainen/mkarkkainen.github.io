import React from "react";
import { Button, Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Screen1 from "../../assets/images/YT1.jpg";
import Screen2 from "../../assets/images/YT2.jpg";
import Screen3 from "../../assets/images/YT3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  texts: {
      width: "50%",
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
}));

const Yamuni = () => {
  const classes = useStyles();

  return (
    <>
      <main>
        <Grid container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item maxWidth="sm" className={classes.texts}>
                <Typography
                component="h6"
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
                >
                <strong>Fundación Yamuni Tabush</strong>
                </Typography>
                <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                paragraph
                >
                Website design for Yamuni Tabush Foundation.
                </Typography>
                <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                paragraph
                >
                As a <strong>UX/UI designer</strong>, my responsibility was to provide high fidelity wireframes and aid in information achitecture.
                </Typography>
            </Grid>

            <Grid item align="center">
                <img className={classes.screens} src={Screen1} alt="ss" />
                <img className={classes.screens} src={Screen2} alt="ss" />
                <img className={classes.screens} src={Screen3} alt="ss" />
            </Grid>

            <Grid item >
                <Button variant="outlined" color="default" className={classes.buttons}>
                    <Link href="/Projects">BACK</Link>
                </Button>
            </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Yamuni;