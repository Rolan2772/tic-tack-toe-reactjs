import React from "react";
import Square from "../square/Square";
import Grid from "@material-ui/core/Grid";
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
    boardMargin: {
        margin: '10px'
    }
});

export const DynamicRow = (props) => {
    const {rowIndex, rowData, onClick} = props;
    const size = rowData.length;
    let cells = [];

    for (let index = 0; index < size; index++) {
        const cellIndex = rowIndex * size + index;
        const value = rowData[index];
        cells.push(<Square key={cellIndex} value={value} onClick={() => onClick(cellIndex)}/>);
    }
    return (
        <Grid container justify="center">
            {cells}
        </Grid>
    )
};

export const DynamicBoard = (props) => {
    const {boardData, onClick} = props;
    const board = [];
    const boardSize = Math.sqrt(boardData.length);

    for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
        const start = rowIndex * boardSize;
        const end = start + boardSize;
        const rowData = boardData.slice(start, end);
        board.push(<DynamicRow key={rowIndex} rowIndex={rowIndex} rowData={rowData} onClick={onClick}/>);
    }
    return board;
};

export const Board = (props) => {
    const {squares, onClick} = props;

    return (
        <Grid className={props.classes.boardMargin}>
            {<DynamicBoard boardData={squares} onClick={onClick}/>}
        </Grid>
    )
};

export default Board;