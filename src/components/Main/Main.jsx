import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core";

import useStyles from "./styles";

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by speechly" />
            <CardContent>
            <Typography variant="h5">Total Balance $100</Typography>
            <Typography variant="subtitle1" styles={{lineheight:"1.5em",marginTop:"20px"}}>
            Try saying: Add income for $100 in category salary for monday...
            </Typography>
            <Divider />
            {/* Form */}
            </CardContent>
            <CardContent className={classes.CardContent}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                {/* Lists */}
            </Grid>
            </Grid>
            </CardContent>
        </Card>
    );
}

export default Main
