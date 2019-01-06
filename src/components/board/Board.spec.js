import React from 'react';
import {render} from 'enzyme';
import Board from './Board';

describe('<Board />', () => {

    it('should render board', () => {
        const size = 2;
        const squares = Array(size).fill(false);
        const board = render(<Board squares={squares} onClick={() => ''}/>);

        expect(board.find('button').length).toEqual(size);
    });
});