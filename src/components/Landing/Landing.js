import React, { useState } from 'react';
import { Container, Typography, Box, FormControlLabel, Checkbox } from '@material-ui/core'
import useStyles from './styles';

const Landing = () => {
    const [ checked, setChecked ] = useState(true);
    const classes = useStyles();

    return (
        <header>
            <FormControlLabel 
                control={
                    <Checkbox 
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                }
                label="a fucking checkbox"
            />
            <Container className={classes.root}>
                    <Typography align="center">Landing</Typography>
            </Container>
        </header>
    )
}

export default Landing;