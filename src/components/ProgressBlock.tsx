interface ProgressBlockProps{
    heading: string,
    number: number,
}

function ProgressBlock ({heading, number } :  ProgressBlockProps) {
    return (
        <div className="border bg-card rounded-4 pb-2 pt-2 px-3 h-70">
            <div className="text-light smaller fw-semibold">{heading}</div>
            <div className="fs-4 fw-bold mc-orange">{number}</div>
        </div> 
    )
}

export default ProgressBlock