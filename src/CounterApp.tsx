interface CounterAppProps {
    value: number;
}

export const CounterApp = ({ value }: CounterAppProps) => {
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ value }</h2>
    </>
  )
}
