interface FirstAppProps {
    title: string;
    subtitle?: string;
}

export const FirstApp = ( { title, subtitle }: FirstAppProps ) => {

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
        </>
    )
}

