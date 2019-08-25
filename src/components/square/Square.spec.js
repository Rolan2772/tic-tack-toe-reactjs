import React from 'react';
import {shallow} from 'enzyme';
import Square from './Square';

describe('<Square />', () => {

    test('should render value', () => {
        const value = "X";

        const square = shallow(<Square value={value} onClick={() => ""}/>);

        expect(square.childAt(0).text()).toEqual(value);
    });

    test('should invoke function on click', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Square value="X" onClick={onClick}/>);

        wrapper.simulate('click');

        expect(onClick).toHaveBeenCalled();
    });
});