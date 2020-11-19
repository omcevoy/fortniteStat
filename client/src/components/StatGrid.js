import React, { useContext, Fragment} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { StatCard } from './StatCard';


const useStyles = makeStyles ((theme) => ({
    grid: {
        height: 500,
        width: 1000
    },
    errorText: {
        color: 'red',
        fontSize: 30
    },
    titleText: {
        color: 'gray',
        fontSize: 25
    }
}))
export const StatGrid = () => {
    const {lifeTimeStats} = useContext(GlobalContext);
    const classes = useStyles();
    let gridMarkup;

    if (lifeTimeStats === undefined) {
        gridMarkup = <Fragment>
                        <Grid container layout={'column'} spacing={10} className = {classes.grid}>
                            <StatCard object = {{'Matches Played': '---'}}/>
                            <StatCard object = {{'Wins': '---'}}/>
                            <StatCard object = {{'Kills': '---'}}/>
                            <StatCard object = {{'K/d': '---'}}/>
                        </Grid>
                     </Fragment>          
        } else{
        gridMarkup =<Fragment> 
                        <Grid container layout={'column'} spacing={10} className = {classes.grid}>
                            {lifeTimeStats.map((stat, index) => <StatCard key={index} object={stat}/>)}
                        </Grid>
                    </Fragment> 
    }
    return gridMarkup

}