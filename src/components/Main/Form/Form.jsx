import React from 'react'
import {TextFirld, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from "@material-ui/core"; 

import useStyles from "./styles";

const Form = () => {
    const classes = useStyles();
    return (
     <Grid container spacing={2}>
<Grid item xs={12}>
<Typography align="centre" variant="subtitle2" gutterBotttom>
    ...
</Typography>
</Grid>
<Grid item xs={6}>
<FormControl fullWidth>
    
</FormControl>
</Grid>
     </Grid>
    )
}

export default Form
