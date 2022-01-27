import { ADD_MOVE, SET_WINNER, SWITCH_PLAYERS } from './types';

export const addMove = (cellId) => ({
    type: ADD_MOVE,
    payload: cellId
});

export const swithPlayers = () => ({
    type: SWITCH_PLAYERS
});

export const setWinner = (winner) => ({
    type: SET_WINNER,
    payload: winner
});

export const setPlayers = (player1, player2) => ({
    player1: {
        type: player1,
        sign: 'x'
    },
    player2: {
        type: player2,
        sign: 'o'
    }
})