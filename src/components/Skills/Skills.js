import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";

import { devSkills, designSkills } from './SkillsData';
import useStyles from "./styles";

const Skills = () => {
    const classes = useStyles()

  return (
      <section className={classes.content} style={{ margin: "4% 0 4% 0" }}>
        <Container>
          <div className={classes.toolbar}>
              <Typography variant="h4" className={classes.title}>skills</Typography>
          </div>
          <Grid container alignItems="center" spacing={4}>
                {devSkills.map((skills) => (
                        <Grid item key={skills.id} md={4}>
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
          {/* <div className={classes.toolbar}>
              <Typography variant="h4" style={{ textAlign: "center", color: "#353535", padding: "4% 0 4% 0"}}>design</Typography>
          </div> */}
          <Grid container alignItems="center" spacing={4}>
                {designSkills.map((skills) => (
                        <Grid item key={skills.id} md={4}>
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