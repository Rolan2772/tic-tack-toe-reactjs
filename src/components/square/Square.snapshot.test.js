import React from 'react';
import Square from './Square';
import renderer from 'react-test-renderer';

describe('<Square />', () => {

    test('should match snapshot', () => {
        const component = renderer.create(
            <Square value="X" onClick={() => ''}/>
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('should match snapshot after click', () => {
        const component = renderer.create(
            <Square value="X" onClick={() => ''}/>
        );

        let tree = component.toJSON();
        tree.props.onClick();
        tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});

