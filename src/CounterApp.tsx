import { MouseEvent, useState } from 'react';

interface CounterAppProps {
    value: number;
}

export const CounterApp = ({ value }: CounterAppProps) => {

    const [ counter, setCounter ] = useState(value)

    const handleAdd = ( event: MouseEvent ) => {
        setCounter( prev => prev + 1 );
    }

    const handleSubstract = ( event: MouseEvent ) => {
        setCounter( prev => prev - 1 );
    }

    const handleReset = ( event: MouseEvent ) => {
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}
