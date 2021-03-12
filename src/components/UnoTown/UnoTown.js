import React from "react";
import { Button, Grid, Typography, Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import splitScreen from "../../assets/images/split-screens.jpg";
import Dashboard from "../../assets/images/Dashboard.png";
import Users from "../../assets/images/Users.png";
import Orders from "../../assets/images/Orders.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  },
  screens: {
    width: "80%",
  },
}));

const UnoTown = () => {
  const classes = useStyles();

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
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
              align="center"
              color="textSecondary"
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
              align="center"
              color="textSecondary"
              paragraph
              style={{ marginBottom: "10%" }}
            >
              As a <strong>co-founder</strong> and{" "}
              <strong>UX/UI designer</strong>, my responsibility was to provide
              wireframes, concepts and prototypes. Additionally I clarified and
              documented each user type and their prioritized features and
              functions to create an information architecture.
            </Typography>
          </Container>
          <Paper>
            <img className={classes.image} src={splitScreen} alt="ss" />
          </Paper>

          <Container maxWidth="sm">
            <Typography
              component="h6"
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
              style={{ marginTop: "10%" }}
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
              <strong>customizability</strong> as testing showed that different
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
          </Container>

          <Paper align="center">
            <img className={classes.screens} src={Dashboard} alt="ss" />
          </Paper>

          <Paper align="center">
            <img className={classes.screens} src={Users} alt="ss" />
          </Paper>

          <Paper align="center">
            <img className={classes.screens} src={Orders} alt="ss" />
          </Paper>

          <Container maxWidth="sm">
            <Typography
              component="h6"
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Branding
            </Typography>

            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              paragraph
            >
              Two mock up logo options were created and an initial color scheme
              selected.{" "}
            </Typography>
          </Container>

          <Container maxWidth="sm">
            <Typography
              component="h6"
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Outcome
            </Typography>

            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              paragraph
            >
              Basic functionality was achieved and tested. A re-design, in the
              form of a prototype was well on its way until the project had to
              be put on hold due to lack of adquate funding.
            </Typography>
          </Container>
        </div>
      </main>
      <Button variant="outlined" color="default" className={classes.buttons}>
        BACK
      </Button>
    </>
  );
};

export default UnoTown;
