import React from "react";
import Board from "./board";
import utils from "../utils/utils";

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
            status = 'Next player: ' + (this.state.isX ? 'X' : 'O');
        }

        const moves = history.map((step, move) => {
            const desc = move > 0 ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={currentState.squares} onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;