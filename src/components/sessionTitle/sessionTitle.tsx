
interface SessionTitleProps {
    title: string
}

export function SessionTitle({title}: SessionTitleProps) {
    return (
        <>
            <h2 id='empresa' className="text-primary text-5xl font-semibold">
                {title}
            </h2>
        </>
    )
}