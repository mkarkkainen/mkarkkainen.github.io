import React from "react";
import { Button, Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import splitScreen from "../../assets/images/split-screens.jpg";
import Dashboard from "../../assets/images/Dashboard.jpg";
import Users from "../../assets/images/Users.jpg";
import Orders from "../../assets/images/Orders.jpg";
import UTLogo from '../../assets/images/LogosUT.jpg';
import ColorScheme from '../../assets/images/ColorScheme.jpg'

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

const UnoTown = () => {
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
              <strong>UnoTown</strong>
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              paragraph
            >
              Uno Town is an online subcontracting solution for the cleaning
              industry in Finland. It focuses on simplifying the process of
              hiring subcontractors, management of orders and digitalizing steps
              along the way. Uno Town improves <strong>efficiancy</strong> &{" "}
              <strong>transparency</strong> for all parties involved.
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              paragraph
            >
              As a <strong>Co-Founder</strong> and{" "}
              <strong>UX/UI designer</strong>, my responsibility was to provide
              wireframes, concepts and prototypes. Additionally I clarified and
              documented each user type and their prioritized features and
              functions to create an information architecture.
            </Typography>
          </Grid>
        </Grid>

        <img className={classes.image} src={splitScreen} alt="ss" />

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
              <strong>Dashboard</strong>
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              paragraph
            >
              Daily operations required an unnecessary amount of clicking around
              different pages to <strong>access vital data</strong>. This caused
              mistakes to happen on a regular basis. Such as, the wrong amount
              of taskers arriving to a gig or complaints not getting immediate
              attention.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              paragraph
            >
              A modifyable component based dashbboard was designed to allow for 
              <strong> customizability</strong> as testing showed that different
              users required different types of information.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              paragraph
            >
              <strong>Information</strong> architecture was structured using{" "}
              <strong>card sorting</strong>. Essential modules were determined
              through <strong>expert review</strong>.
            </Typography>
          </Grid>

          <Grid container direction="column" justify="center" align="center" >
            <Grid item>
                <img className={classes.screens} src={Dashboard} alt="ss" />
                <img className={classes.screens} src={Users} alt="ss" />
                <img className={classes.screens} src={Orders} alt="ss" />
            </Grid>
          </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item maxWidth="sm" className={classes.texts}>
            <Typography
              component="h6"
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <strong>Branding</strong>
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              paragraph
            >
              Two mock up logo options were created and an initial color scheme selected.
            </Typography>
            <Grid item align="center">
                <img className={classes.screens} src={UTLogo} alt="ut logo" />
                <img className={classes.screens} src={ColorScheme} alt="colors"  />
            </Grid>
          </Grid>
        </Grid>

          <Grid item maxWidth="sm" className={classes.texts}>
            <Typography
                component="h6"
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
            >
              <strong>Outcome</strong>
            </Typography>
            <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                paragraph
            >
                Basic functionality was achieved and tested. A re-design, in the form of a prototype was well on its way until the project had to be put on hold due to lack of adquate funding.            </Typography>
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

export default UnoTown;