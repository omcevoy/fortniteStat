import React from 'react';
// "proxy" : "https://api.fortnitetracker.com/v1/profile/account"

export default (state, action) => {
    switch(action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'END_LOADING':
            return {
                ...state,
                loading: false,
                pulledData: true
            }
        case 'GET_PLAYER_DATA':
            return {
                ...state,
                lifeTimeStats: action.payload.lifeTimeStats,
                stats: action.payload.stats,
            }
        default:
            return state
    }
}