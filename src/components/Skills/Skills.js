import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import { SkillsData } from './SkillsData';
import useStyles from "./styles";

const Skills = () => {
    const classes = useStyles()

  return (
      <section className={classes.content}>
        <div className={classes.toolbar}>
        <Typography variant="h3" style={{ textAlign: "center"}}>Skills</Typography>
        <Grid container justify="center" spacing={4}>
              {SkillsData.map((skills) => (
                      <Grid item key={skills.id} md={4}>
                        <Paper className={classes.paper}>
                            {skills.skill}
                            <Typography>{skills.name}</Typography>
                        </Paper>
                      </Grid>
                )
              )}  
        </Grid>
        </div>
      </section>
  );
}
export default Skills;