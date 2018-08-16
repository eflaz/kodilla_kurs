import React from 'react';
import style from './Navigation.css';

const Navigation = (props) =>
    <div className={style.navigation}>
        <button type="button" onClick={props.handleCheck}>Check</button>
        <button type="button" onClick={props.handleNewGame}>New game</button>
        <button type="button" onClick={props.handleSolve}>Solve</button>
        <button type="button" onClick={props.handleRestart}>Restart</button>
    </div>

export default Navigation;