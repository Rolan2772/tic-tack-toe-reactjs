import React from 'react';
import {shallow} from 'enzyme';
import {Game, GameStatus, GameHistory} from './Game';
import Board from '../board/Board';

describe('<Game/>', () => {

    const styles = {
        historyControl: {
            margin: '2px'
        }
    };

    test('should have initial state', () => {
        const wrapper = shallow(<Game classes={styles}/>);

        expect(wrapper.state().step).toEqual(0);
        expect(wrapper.state().history).toEqual([{
            squares: Array(9).fill(null),
        }]);
        expect(wrapper.state().isX).toBeTruthy();
        expect(wrapper.state().winner).toBeFalsy();
    });

    test('should have game components', () => {
        const wrapper = shallow(<Game classes={styles}/>);

        expect(wrapper.find(GameStatus)).toBeDefined();
        expect(wrapper.find(Board)).toBeDefined();
        expect(wrapper.find(GameHistory)).toBeDefined();
    });

    test('should change state with players moves', () => {
        const wrapper = shallow(<Game classes={styles}/>);

        const status = wrapper.find(GameStatus);

        expect(status.prop('text')).toEqual('Next move: X');
    });

});