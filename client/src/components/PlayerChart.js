import React, {useState, useRef, useEffect, useContext, Fragment} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import {BarChart} from './BarChart';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    dropDown: {
        display: 'flex',
        marginTop: 50,
        width: 500,
    },
    grid: {
        width: 1000,
        height: 500
    },
    errorText: {
        color: 'red',
        fontSize: 30
    }
  }));
    const dataOptions = [
                            {
                                value: 'wins',
                                label: 'Wins'
                            },
                            {
                                value: 'kills',
                                label: 'Kills'
                            },
                            {
                                value: 'kd',
                                label: 'K/D'
                            },
                            {
                                value: 'win%',
                                label: 'Win %'
                            },
                            {
                                value: 'mp',
                                label: 'Matches Played'
                            }
                        ];

export const PlayerChart = () => {
    const [selectedOption, setOption] = useState('wins');
    const {stats} = useContext(GlobalContext);
    const classes = useStyles();
    if (stats === undefined) {
        return (
            <p className = {classes.errorText}>Account not found, please try a different account</p>
        )
    }
    

    const actualData = { 'wins' :[stats.p2.top1.valueInt, stats.p10.top1.valueInt, stats.p9.top1.valueInt],
                         'kills' : [stats.p2.kills.valueInt, stats.p10.kills.valueInt, stats.p9.kills.valueInt],
                         'kd' : [stats.p2.kd.valueDec, stats.p10.kd.valueDec, stats.p9.kd.valueDec],
                         'win%' : [stats.p2.winRatio.valueDec, stats.p10.winRatio.valueDec, stats.p9.winRatio.valueDec],
                        'mp' : [stats.p2.matches.valueInt, stats.p10.matches.valueInt, stats.p9.matches.valueInt]}
    const handleChange = (event) => {
        setOption(event.target.value)
    };

    return (
        <Grid container spacing = {10} className = {classes.grid}>
            <Grid item sm = {2} xs = {10}>
                 <form  noValidate autoComplete="off">
                    <TextField
                        select
                        label="Select"
                        value={selectedOption}
                        className = {classes.dropDown}
                        onChange={handleChange}
                        helperText="Select your endpoint"
                    >
                        {dataOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </form>
            </Grid>
            <Grid item sm = {8} xs = {10}>
                <svg viewBox="0 0 80 80" preserveAspectRatio="xMinYMin slice">
                    {stats && (  
                        <BarChart  positionX={50} positionY={40} width={70} height={100} data = {actualData[selectedOption]} />
                        )
                    }
                    
                </svg>
            </Grid>
        </Grid>
    )
}