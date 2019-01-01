import React from 'react'
import {shallow, mount} from 'enzyme'
import Square from './Square'

describe('<Square />', () => {

    it('should render value', () => {
        const value = "X";
        const wrapper = mount(<Square value={value} onclick={() => ""}/>);

        const spans = wrapper.find('span');
        expect(spans.length).toEqual(2);
        expect(spans.at(0).text()).toEqual("X");
    });

    it('should invoke function on click', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Square value="X" onclick={onClick}/>);

        wrapper.simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});