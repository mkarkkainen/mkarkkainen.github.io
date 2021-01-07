import React from 'react';
import { Container, Typography } from '@material-ui/core'
import useStyles from './styles';

const Projects = () => {
    const classes = useStyles();

    return (
        <header>
            <Container alignItems="center" className={classes.root}>

                <Typography>Projects</Typography>

            </Container>
        </header>
    )
}

export default Projects;