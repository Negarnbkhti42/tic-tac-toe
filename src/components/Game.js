const CIRCLE_TURN = 'circle';
const X_TURN = 'x';

function Cell(id) {
    this.id = id;
    this.value = '';

    this.setValue = (newValue) => this.value = newValue;
}

const Board = [];

for (let i = 0; i < 9; i++) {
    Board.push(new Cell(i));
}

export const Game = {
    CIRCLE_TURN,
    X_TURN,
    Board
};