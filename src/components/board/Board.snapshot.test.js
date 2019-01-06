import React from 'react';
import Board from './Board';
import renderer from 'react-test-renderer';

describe('<Board />', () => {

    it('should match snapshot', () => {
        const squares = [];
        const component = renderer.create(
            <Board squares={squares} onclick={() => ''}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

