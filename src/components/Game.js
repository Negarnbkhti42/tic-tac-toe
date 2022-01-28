const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const isXWinner = board => WINNING_PATTERNS.some(pattern => pattern.every(idx => board[idx] === 'x'));
const isOWinner = board => WINNING_PATTERNS.some(pattern => pattern.every(idx => board[idx] === 'o'));
const isBoardFilled = board => Object.keys(board).every(key => board[key]);

export const checkWin = (board) => {
    return (isXWinner(board) && 'x') ||
            (isOWinner(board) && 'o') ||
            (isBoardFilled(board) && 'Draw') ||
            null
}