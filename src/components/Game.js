function Cell(id, value= '') {
    let cellId = id;
    let cellValue = value;

    const getId = () => cellId;
    const setValue = (newValue) => cellValue = newValue;
    const getValue = () => cellValue

    return {
        getId,
        setValue,
        getValue
    }
}

function createBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push(new Cell(i));
    }

    return {
        getCells: () => board,
        getCellById: (id) => board.find(cell => cell.getId === id)
    }
}

const CIRCLE_TURN = 'circle';
const X_TURN = 'x';

const Board = createBoard();

export const Game = {
    CIRCLE_TURN,
    X_TURN,
    Board
};