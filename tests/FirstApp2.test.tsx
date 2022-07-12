/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import { FirstApp } from '../src/FirstApp';


describe('Test <FirstApp />', () => {

    const title = 'Hello, I am Goku';
    const subtitle = 'I am a Saiyan';
    const name = 'Goku';
    
    test('should match snapshot', () => {

        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();
    
    });

    test('should show message "Hello, I am Goku"', () => {
    
        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
        //screen.debug();
    });

    test('should show title in h1', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('should show subtitle send by props', () => {

        render(
            <FirstApp
                title={ title }
                subtitle={ subtitle}
            />
        );
        expect( screen.getByText(subtitle) ).toBeTruthy();

    });

    test('should show names send by props', () => {

        render(
            <FirstApp
                title={ title }
                name={ name }
            />
        );
        expect( screen.getAllByText(name).length ).toBe(2);

    });

});