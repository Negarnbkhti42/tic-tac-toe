import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { changeGameState } from '../reducer';

function Menu() {

    const dispatch = useDispatch();
    const gameState = useSelector(state => state.gameState);

    const startGame = () => {
        dispatch(changeGameState('in-progress'));
    };

    return (
        <div className={`menu-container ${gameState === 'in-progress' ? 'menu-closed' : ''}`}>
            <h1 className="menu-h1">TIC-TAC-TOE</h1>
            <button type="button" onClick={startGame}>start game</button>
        </div>
    )
}

export default Menu;