import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gameFinished, gameInProgress, settings } from "../constants";

import { clearBoard, setCurrentPlayer, setWinner, startNewGame } from '../reducer';

function Menu() {

    const dispatch = useDispatch();
    const gameState = useSelector(state => state.gameState);
    const winner = useSelector(state => state.winner);

    const startGame = () => {
        dispatch(startNewGame(gameInProgress));
    };

    const restartGame = () => {
        dispatch(clearBoard());
        dispatch(setWinner(null));
        dispatch(setCurrentPlayer('x'));
        dispatch(startNewGame());
    }

    const settingMenu = <><h1 className="menu-h1">TIC-TAC-TOE</h1>
        <button type="button" onClick={startGame} className="menu-button menu-button_start">start game</button></>;

    const endGameMenu = <><h2>player {winner} has won the game</h2>
        <button type="button" onClick={restartGame} className="menu-button menu-button_restart">restart game</button></>

    return <div className={`menu-container menu-container_game-${gameState}`}>
        {gameState === settings ? settingMenu : gameState === gameFinished ? endGameMenu : null}
    </div>
}

export default Menu;