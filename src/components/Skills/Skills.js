import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import { devSkills, designSkills } from './SkillsData';
import useStyles from "./styles";

const Skills = () => {
    const classes = useStyles()

  return (
      <section className={classes.content} style={{ borderTop: "2px solid white", borderBottom: "2px solid white"}}>
        <div className={classes.toolbar}>
            <Typography variant="h3" style={{ textAlign: "center", color: "white", padding: "4% 0 4% 0"}}>Development</Typography>
        </div>
        <Grid container justify="center" spacing={4}>
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
        <div className={classes.toolbar}>
            <Typography variant="h3" style={{ textAlign: "center", color: "white", padding: "4% 0 4% 0"}}>Design</Typography>
        </div>
        <Grid container justify="center" spacing={4}>
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
      </section>
  );
}
export default Skills;