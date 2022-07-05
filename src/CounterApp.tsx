import { MouseEvent, useState } from 'react';

interface CounterAppProps {
    value: number;
}

export const CounterApp = ({ value }: CounterAppProps) => {

    const [ counter, setCounter ] = useState(0)

    const handleAdd = ( event: MouseEvent ) => {
        console.log(event);
        setCounter( prev => prev + 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )
}
