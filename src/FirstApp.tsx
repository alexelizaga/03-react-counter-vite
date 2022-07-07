interface FirstAppProps {
    title?: string;
    subtitle?: string;
    name?: string;
}

export const FirstApp = ( { title = 'No title', subtitle = 'No subtitle', name = 'Alex' }: FirstAppProps ) => {

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    )
}

