import React from 'react';
import {shallow} from 'enzyme';
import {Game} from './Game';


describe('<Game/>', () => {

    const styles = {
        historyControl: {
            margin: '2px'
        }
    };

    test('initial state', () => {
        const wrapper = shallow(<Game classes={styles}/>);

        expect(wrapper.state().stepNumber).toEqual(0);
        expect(wrapper.state().history).toEqual([{
            squares: Array(9).fill(null),
        }]);
        expect(wrapper.state().isX).toBeTruthy();
    });
});