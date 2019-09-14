import React from 'react';
import {shallow} from 'enzyme';
import {Board, DynamicBoard} from './Board';

describe('<Board />', () => {

    const styles = {
        boardMargin: {
            margin: '10px'
        }
    };

    test('should render board', () => {
        const squares = Array(9).fill(false);
        const board = shallow(<Board squares={squares} onClick={() => ''} classes={styles}/>);

        const dynamicBoard = board.find(DynamicBoard);
        expect(dynamicBoard).toBeDefined();
        expect(dynamicBoard.prop('boardData')).toEqual(squares);
    });
});