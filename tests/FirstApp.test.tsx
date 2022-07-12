/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import { FirstApp } from '../src/FirstApp';


describe('Test <FirstApp />', () => {
    
    test('should match snapshot v1', () => {
    
        const title = 'Hello, I am Goku';
        const component = renderer.create(
            <FirstApp title={ title } />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

    test('should match snapshot v2', () => {
        
        const title = 'Hello, I am Goku';
        const { container } = render( <FirstApp title={ title } /> );

        expect(container).toMatchSnapshot();

    });

    test('should show title in h1', () => {
        const title = 'Hello, I am Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain(title);

        expect( getByTestId('test-title').innerHTML ).toBe(title);
        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('should show subtitle send by props', () => {
        const title = 'Hello, I am Goku';
        const subtitle = 'I am the best';
        const { getByText } = render(
            <FirstApp
                title={ title }
                subtitle={ subtitle }
            />
        );

        expect( getByText(subtitle) ).toBeTruthy();
    });

    test('should show multiple names', () => {
        const title = 'Hello, I am Goku';
        const name = 'Alex';
        const { getAllByText } = render(
            <FirstApp
                title={ title }
                name={ name }
            />
        );

        expect( getAllByText(name).length ).toBe(2);
    });

});