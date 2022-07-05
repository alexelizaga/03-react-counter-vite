import { MouseEvent } from 'react';

interface CounterAppProps {
    value: number;
}

export const CounterApp = ({ value }: CounterAppProps) => {

    const handleAdd = ( event: MouseEvent ) => {
        console.log(event);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>

            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )
}
