import React from 'react';
import {shallow} from 'enzyme';
import Square from './Square'

describe('<Square />', () => {

    it('should invoke function on click', () => {
        const onClick = jest.fn();
        const square = shallow(<Square value="X" onclick={onClick}/>);

        expect(square.text()).toEqual('X');
        square.simulate('click');
        expect(square.text()).toEqual('X');
        expect(onClick).toHaveBeenCalled();
    });
});