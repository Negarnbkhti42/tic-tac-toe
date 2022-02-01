import { ADD_MOVE, 
    SET_WINNER, 
    SWITCH_PLAYERS, 
    SET_PLAYERS, 
    START_NEW_GAME, 
    END_GAME, 
    CLEAR_BOARD, 
    SET_CURRENT_PLAYER } from './actions';
import { gameFinished, gameInProgress, settings } from './constants';

export const addMove = (cellId) => ({
    type: ADD_MOVE,
    payload: cellId
});

export const clearBoard = () => ({
    type: CLEAR_BOARD
});

export const switchPlayers = () => ({
    type: SWITCH_PLAYERS
});

export const setCurrentPlayer = (currentPlayer) => ({
    type: SET_CURRENT_PLAYER,
    payload: currentPlayer
})

export const setWinner = (winner) => {

    return {
        type: SET_WINNER,
        payload: winner
    };
};

export const setPlayers = (player1, player2) => ({
    type: SET_PLAYERS,
    payload: {
        player1,
        player2
    }
});

export const startNewGame = () => ({
    type: START_NEW_GAME,
    payload: gameInProgress
});

export const endGame = () => ({
    type: END_GAME,
    payload: gameFinished
});


const initialBoard = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
}

const initialState = {
    board: {...initialBoard},
    players: {
        player1: 'human',
        player2: 'human',
    },
    currentPlayer: 'x',
    winner: null,
    gameState: settings
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MOVE: 
            return {
                ...state,
                board: {
                    ...state.board,
                    [action.payload]: state.currentPlayer
                }
            };

        case CLEAR_BOARD: 
            return {
                ...state,
                board: {...initialBoard}
            };

        case SET_CURRENT_PLAYER:
            return {
                ...state,
                currentPlayer: action.payload
            };

        case SWITCH_PLAYERS:
            return {
                ...state,
                currentPlayer: state.currentPlayer === 'x' ? 'o' : 'x'
            };

        case SET_PLAYERS:
            return {
                ...state,
                players: action.payload
            };

        case SET_WINNER:
            return {
                ...state,
                winner: action.payload
            };

        case START_NEW_GAME:
            return {
                ...state,
                gameState: action.payload
            };

        case END_GAME:
            return {
                ...state,
                gameState: action.payload
            };

        default:
            return state;
    }
};

export default reducer;