import React from 'react';
import {shallow} from 'enzyme';
import {Square} from './Square';

describe('<Square />', () => {

    const styles = {
        cell: {
            'min-height': '36px'
        }
    };

    test('should render value', () => {
        const value = "X";

        const square = shallow(<Square value={value} onClick={() => ""} classes={styles}/>);

        expect(square.childAt(0).text()).toEqual(value);
    });

    test('should invoke function on click', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Square value="X" onClick={onClick} classes={styles}/>);

        wrapper.simulate('click');

        expect(onClick).toHaveBeenCalled();
    });
});