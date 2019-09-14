import React from 'react';
import Game from './Game';
import renderer from 'react-test-renderer';

describe('<Game />', () => {

    test('should match snapshot', () => {
        const component = renderer.create(<Game/>);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

