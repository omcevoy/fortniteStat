import React, {useState, useContext, Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PlayerChart} from './PlayerChart';
import { GlobalContext } from '../context/GlobalState';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    textfield: {
        display: 'flex',
        marginTop: 5,
        width: 500,
    },
    resize: {
        fontSize: 30
    },
    submitButton: {
        position: 'relative',
        marginTop: 10,
        backgroundColor: 'red'
    },
    progress: {
        left: '50%'
    },
    playerChart: {
        display: 'flex'
    }
  }));

export const PlayerForm = () => {
    const [username, setUsername] = useState('');
    const {getPlayerData, loading, pulledData} = useContext(GlobalContext);

    const classes = useStyles();


    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        getPlayerData(username);
    }
    return(
            <Fragment>
                <form classname = {classes.root} onSubmit = {handleSubmit} noValidate> 
                    <TextField required fullWidth className = {classes.textfield} 
                            InputProps = {{ classes : {input : classes.resize}}}
                            onChange = {handleUsernameChange} label = 'Epic Account Name'/>
                    <Button type = 'submit' contained className = {classes.submitButton} >
                        Submit
                        {loading && (
                            <CircularProgress size = {30} className = {classes.progress}/>
                        )}
                    </Button>
                </form>
                    {pulledData === true ? (<PlayerChart />) : (null)}
            </Fragment>
         

    )
}