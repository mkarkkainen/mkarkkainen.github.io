import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import logo from "../../assets/images/slogo.svg";

import Klogo from "../../assets/images/Frame18.jpg";
import Ulogo from "../../assets/images/Frame12.jpg";
import Ylogo from "../../assets/images/Frame16.jpg";


const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: "5%",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
  }
}));


const Projects = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <Container align="center" >
            <Typography align="center" variant="h6">MIIKKA KÄRKKÄINEN</Typography>
            <Link href="/"><img src={logo} alt="logo" /></Link>
        </Container>

        <Container maxWidth="sm" className={classes.heroContent}>
            <Typography component="h6" variant="h6" align="center" color="textPrimary" gutterBottom>
                <strong>UX/UI & Product Design Projects</strong>
            </Typography>
            <hr />
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Here is a collection of some of the design projects I have worked on in the past.
            </Typography>
        </Container>

        <Container className={classes.cardGrid} maxWidth="md">

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <Link href="/Unotown">
                        <CardMedia
                            className={classes.cardMedia}
                            image={Ulogo}
                            title="Image title"
                        />
                    </Link>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <Link href="/Yamuni">
                        <CardMedia
                            className={classes.cardMedia}
                            image={Ylogo}
                            title="Image title"
                        />
                    </Link>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <Link href="/Kokkosaari">
                        <CardMedia
                            className={classes.cardMedia}
                            image={Klogo}
                            title="Image title"
                        />
                    </Link>
                </Card>
            </Grid>
            <Container className={classes.cardGrid}>
                <Button variant="outlined" color="default" className={classes.buttons}>
                    <Link style={{ color: 'black' }} href="/">BACK</Link>
                </Button>
            </Container>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Projects;