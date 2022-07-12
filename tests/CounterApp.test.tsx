/**
 * @jest-environment jsdom
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

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

    test('should increment with boton +1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();
    });

    test('should decrease with boton -1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9') ).toBeTruthy();
    });

    test('should reset with boton reset', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByTestId('reset') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        expect( screen.getByText(initialValue) ).toBeTruthy();
    });


});