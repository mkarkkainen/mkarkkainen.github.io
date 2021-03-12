import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Klogo from "../../assets/images/Frame18.png";
import Ulogo from "../../assets/images/Frame12.png";
import Ylogo from "../../assets/images/Frame16.png";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: "15%",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [Ulogo, Ylogo, Klogo];

export default function Album() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h6" variant="h6" align="center" color="textPrimary" gutterBottom>
              <strong>Projects</strong>
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
                This is a collection of some design projects I have worked on.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card}
                    title="Image title"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}


// import React from 'react';
// import { Container, Typography } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         height: '100vh',
//     }
// }))


// const Projects = () => {
//     const classes = useStyles();

//     return (
//         <header>
//             <Container alignItems="center" className={classes.root}>

//                 <Typography>Projects</Typography>

//             </Container>
//         </header>
//     )
// }

// export default Projects;