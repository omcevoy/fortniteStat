import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles ((theme) => ({
    Card: {
        height: 150,
        width: 150,
        textAlign: 'center'
    },
    grid: {
        marginTop: 15
    }
}))

export const StatCard = (stat) => {
    const classes = useStyles();
    let badStats = ['Top 5s', 'Top 3s', 'Top 6s', 'Top 10', 'Top 12s', 'Top 25s', 'Score', 'Win%'];
    let cardObject = !badStats.includes(stat.object.key) ? (
        <Grid  item xs={10} md={3}>
        <Card  elevation = {5} className = {classes.Card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {stat.object.key !== undefined ? stat.object.key : '---'}
                </Typography>
                <Typography className = {classes.numbers} variant = 'h3' gutterBottom>
                    {stat.object.value !== undefined ? stat.object.value : '---'}
                </Typography>
            </CardContent>
        </Card>
        </Grid>
    ) : null
    return cardObject
}