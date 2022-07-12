interface FirstAppProps {
    title: string;
    subtitle?: string;
    name?: string;
}

export const FirstApp = ( { title, subtitle = 'No subtitle', name = 'Alex' }: FirstAppProps ) => {

    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ name }</p>
            <p>{ name }</p>
        </>
    )
}

