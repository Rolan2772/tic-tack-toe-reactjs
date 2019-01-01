import React from "react";
import Square from "../square/Square";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    boardMargin: {
        margin: '10px'
    }
});

class Board extends React.Component {

    renderSquare(index) {
        return <Square value={this.props.squares[index]} onclick={() => this.props.onClick(index)}/>;
    }

    render() {
        return (
            <Grid className={this.props.classes.boardMargin}>
                <Grid container justify="center">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </Grid>
                <Grid container justify="center">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </Grid>
                <Grid container justify="center">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Board);