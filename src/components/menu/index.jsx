import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gameInProgress, settings } from "../constants";

import { startNewGame } from '../reducer';

function Menu() {

    const dispatch = useDispatch();
    const gameState = useSelector(state => state.gameState);

    const startGame = () => {
        dispatch(startNewGame(gameInProgress));
    };

    const settingMenu = <><h1 className="menu-h1">TIC-TAC-TOE</h1>
        <button type="button" onClick={startGame}>start game</button></>;

    return <div className={`menu-container menu-container_game-${gameState}`}>
        {gameState === settings ? settingMenu : null}
    </div>
}

export default Menu;