import React from 'react';
import Tile from './Tile';
import style from './Board.css';

const Board = (props) => { 
    let result = [];
    let tileValue;
    let tileReadOnly;
    const board = props.board;
    for (let tileNumber = 0; tileNumber < board.length; tileNumber++) {
        tileValue = board.charAt(tileNumber);
        if (tileValue == '.') {
            tileValue = '';
        }
        tileReadOnly = props.initialBoard.charAt(tileNumber) != '.';
        result.push(<Tile key={tileNumber} number={tileNumber} value={tileValue} readOnly={tileReadOnly} onChange={props.handleTileChange} />);
    }
    return (
        <div className={style['board']}>
            {result}
        </div>
    );
}

export default Board;