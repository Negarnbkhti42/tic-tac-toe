import { ADD_MOVE, SET_WINNER, SWITCH_PLAYERS, SET_PLAYERS } from './actions';

export const addMove = (cellId) => ({
    type: ADD_MOVE,
    payload: cellId
});

export const switchPlayers = () => ({
    type: SWITCH_PLAYERS
});

export const setWinner = (winner) => ({
    type: SET_WINNER,
    payload: winner
});

export const setPlayers = (player1, player2) => ({
    type: SET_PLAYERS,
    payload: {
        player1,
        player2
    }
});


const initialState = {
    cells: {
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
    },
    players: {
        player1: undefined,
        player2: undefined,
    },
    currentPlayer: null,
    winner: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MOVE: {
            return {
                ...state,
                cells: {
                    ...state.cells,
                    [action.payload]: state.players.currentPlayer
                }
            };
        }

        case SWITCH_PLAYERS:
            return {
                ...state,
                currentPlayer: state.currentPlayer === 'x' ? 'o' : 'x'
            };

        case SET_PLAYERS:
            return {
                ...state,
                players: action.payload
            }

        case SET_WINNER:
            return {
                ...state,
                winner: action.payload
            }

        default:
            return state;
    }
};

export default reducer;