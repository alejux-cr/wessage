import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Header from './Header';
import SideMenu from './SideMenu';
import Chatbox from './Chatbox';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



export default function Chatroom() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Header />
                    </Paper>
                </Grid>
                <Grid
                    container
                    item
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={6}>
                        <Chatbox />
                    </Grid>
                    <Grid item xs={3}>
                        <SideMenu />
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}



