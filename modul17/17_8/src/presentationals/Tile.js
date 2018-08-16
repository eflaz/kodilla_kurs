import React from 'react';
import style from './Tile.css';

const Tile = (props) =>
    <input
        className={style.tile + " " + (props.readOnly ? style.readOnly : style.normal)}
        type="number"
        min="1"
        max="9"
        maxLength="1"
        name={"tile[" + props.number + "]"}
        value={props.value}
        onChange={(event) => props.onChange(props.number, event.target.value)}
        readOnly={props.readOnly} 
    />
export default Tile;