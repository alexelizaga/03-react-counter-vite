/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import { CounterApp } from '../src/CounterApp';

describe('Test <CounterApp />', () => {

    const initialValue = 10;

    test('should match snapshot', () => {
        const { container } = render( <CounterApp value={ initialValue } /> );
        expect( container ).toMatchSnapshot();
    });

    test('should show 100 initial value', () => {
        render( <CounterApp value={100} /> );
        // screen.debug();
        expect( screen.getByText('100') ).toBeTruthy();
    });


});