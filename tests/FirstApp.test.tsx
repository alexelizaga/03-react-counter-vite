/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { FirstApp } from '../src/FirstApp';

describe('Test <FirstApp />', () => {
    
    test('should match snapshot v1', () => {
        
        const component = renderer.create(
            <FirstApp title='' />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

    test('should match snapshot v2', () => {
        
        const title = 'Hello, I am Goku';
        render( <FirstApp title={ title } /> );

    });

});