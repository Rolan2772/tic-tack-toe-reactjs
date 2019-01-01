import React from "react";
import Board from "../board/board";
import utils from "../../utils/utils";
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
    historyControl: {
        margin: '2px'
    }
});

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            isX: true
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            isX: (step % 2) === 0,
        });
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const squares = current.squares.slice();
        if (squares[i] || utils.findWinner(squares)) {
            return;
        }
        squares[i] = this.state.isX ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            isX: !this.state.isX,
        });
    }

    render() {
        const history = this.state.history;
        const currentState = history[this.state.stepNumber];
        const winner = utils.findWinner(currentState.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Player: ' + (this.state.isX ? 'X' : 'O');
        }

        const moves = history.map((step, move) => {
            const desc = move > 0 ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <Button className={this.props.classes.historyControl}
                        variant="contained"
                        onClick={() => this.jumpTo(move)}>{desc}
                </Button>
            );
        });

        return (
            <Grid container direction="column">
                <Grid container justify="center">
                    <Typography variant="h6">{status}</Typography>
                </Grid>
                <Grid>
                    <Board squares={currentState.squares} onClick={(i) => this.handleClick(i)}/>
                </Grid>
                <Grid container justify="center">
                    <Grid container xs={2} direction="column">
                        {moves}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Game);