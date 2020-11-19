import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import app from '../helpers/axiosConfig';


const initialState = {
    lifeTimeStats: [],
    stats: null,
    loading: false,
    pulledData: false,
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( {children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Actions
    function getPlayerData(username) {
        dispatch({type: 'LOADING'});
        app.get(`/data/${username}`, )
        .then((res) => {
            dispatch({
            type: 'GET_PLAYER_DATA',
            payload: res.data
            });
            dispatch({type: 'END_LOADING'})
        })
        .catch((err) => console.log("Error - " + err));
    }

    return (
        <GlobalContext.Provider value = {{lifeTimeStats: state.lifeTimeStats, stats: state.stats, loading: state.loading, pulledData: state.pulledData, getPlayerData}}>
            {children}
        </GlobalContext.Provider>
    )
}