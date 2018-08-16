import React from 'react';
import Tile from '../presentationals/Tile';
import style from './Board.css';

class Board extends React.Component {

    render() {
        let result = [];
        let tileValue;
        let tileReadOnly;
        const board = this.props.board;
        for (let tileNumber = 0; tileNumber < board.length; tileNumber++) {
            tileValue = board.charAt(tileNumber);
            if (tileValue == '.') {
                tileValue = '';
            }
            tileReadOnly = this.props.initialBoard.charAt(tileNumber) != '.';
            result.push(<Tile key={tileNumber} number={tileNumber} value={tileValue} readOnly={tileReadOnly} onChange={this.props.handleTileChange} />);
        }
        return (
            <div className={style['board']}>
                {result}
            </div>
        );
    }
}

export default Board;