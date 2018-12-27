import React from 'react'
import Square from './Square'
import renderer from 'react-test-renderer'

describe('<Square />', () => {

    it('should match snapshot', () => {
        const component = renderer.create(
            <Square value="X" onclick={() => ''}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should match snapshot after click', () => {
        const component = renderer.create(
            <Square value="X" onclick={() => ''}/>
        );

        let tree = component.toJSON();
        tree.props.onClick();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});

