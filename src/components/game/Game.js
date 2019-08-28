import React from "react";
import Board from "../board/Board";
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

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            step: 0,
            isX: true,
            winner: null
        }
    }

    jumpTo(step) {
        this.setState({
            step: step,
            isX: (step % 2) === 0,
        });
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[this.state.step];
        const squares = current.squares.slice();
        if (squares[i] || this.state.winner) {
            return;
        }
        squares[i] = this.state.isX ? 'X' : 'O';
        history.push({squares: squares});
        this.setState({
            history: history,
            step: history.length,
            isX: !this.state.isX,
            winner: utils.findWinner(squares)
        });
    }

    renderMoves = (moves) => {
        return moves.map((step, move) => {
            const desc = move > 0
                ? `Go to move # ${move}`
                : `Go to game start`;
            return (
                <Button
                    key={move}
                    className={this.props.classes.historyControl}
                    variant="contained"
                    onClick={() => this.jumpTo(move)}>
                    {desc}
                </Button>
            );
        });
    };

    render() {
        const {history, step} = this.state;
        const currentState = history[step];

        const status = this.state.winner
            ? `Winner: ${this.state.winner}`
            : `Next move: ${this.state.isX ? 'X' : 'O'}`;

        return (
            <Grid container direction="column">
                <Grid container justify="center">
                    <Typography variant="h6">{status}</Typography>
                </Grid>
                <Grid>
                    <Board squares={currentState.squares} onClick={(i) => this.handleClick(i)}/>
                </Grid>
                <Grid container>
                    <Grid item xs={3} md={4} lg={5}>
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>
                        <Grid container direction={"column"}>
                            {this.renderMoves(history)}
                        </Grid>
                    </Grid>
                    <Grid item xs={3} md={4} lg={5}>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Game);
