import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'inline-block',
        width: '100%'
    },
    pageTitle: {
        fontSize: 40,
        textAlign: 'center'
    },
    summary: {
        fontSize: 20,
        textAlign: 'center'
    }
}));

export const Header = () => {
    const classes = useStyles();
    return(
        <div className = {classes.header}>
            <h2 className = {classes.pageTitle}>Fortnite Stats</h2>
        <p className = {classes.summary}>Enter your epic account name to get a look at your total wins, kills, matches played, and more.</p>
        </div>
    )    
}