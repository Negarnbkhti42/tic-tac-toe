import { ADD_MOVE, SET_PLAYERS, SET_WINNER, SWITCH_PLAYERS } from "./types";

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
        player2: undefined
    },
    currentPlayer: null,
    winner: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MOVE: {
            let sign = state.currentPlayer === state.players.player1 ? 'x' : 'o';
            return {
                ...state,
                cells: {
                    ...state.cells,
                    [action.payload]: sign
                }
            };
        }

        case SWITCH_PLAYERS:
            return {
                ...state,
                currentPlayer: state.currentPlayer === state.players.player1 ? state.players.player2 : state.players.player1
            };

        case SET_PLAYERS:
            return {
                ...state,
                players: action.payload,
                currentPlayer: action.payload.player1
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