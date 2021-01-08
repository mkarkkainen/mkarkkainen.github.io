import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";

import { devSkills, designSkills } from './SkillsData';
import useStyles from "./styles";

const Skills = () => {
    const classes = useStyles()

  return (
      <section className={classes.content}>
        <Container>
          <div className={classes.toolbar}>
              <Typography variant="h4" className={classes.title}><p className={classes.hovers}>dev</p></Typography>
          </div>
          <Grid container alignItems="center" spacing={4}>
                {devSkills.map((skills) => (
                        <Grid item key={skills.id} md={4} xs={6}>
                          <Paper className={classes.paper}>
                              <Paper className={classes.items}>{skills.skill}</Paper>
                              <Typography variant="h6">{skills.name}</Typography>
                          </Paper>
                        </Grid>
                  )
                )}  
          </Grid>
        </Container>

        <Container>
          <div className={classes.toolbar}>
              <Typography variant="h4" className={classes.title}>design</Typography>
          </div>
          <Grid container alignItems="center" spacing={4}>
                {designSkills.map((skills) => (
                        <Grid item key={skills.id} md={4} xs={6}>
                          <Paper className={classes.paper}>
                              <Paper className={classes.items}>{skills.skill}</Paper>
                              <Typography variant="h6">{skills.name}</Typography>
                          </Paper>
                        </Grid>
                  )
                )}  
          </Grid>
        </Container>
      </section>
  );
}
export default Skills;