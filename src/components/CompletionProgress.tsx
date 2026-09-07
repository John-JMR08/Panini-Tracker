interface CompletionProgressProps{
    heading: string,
    collected: number;
    missing: number,
    duplicates: number;
}

function CompletionProgress({heading, collected, missing, duplicates} : CompletionProgressProps) {
    return(
        <>
        <div className="card rounded-2 mb-2 mt-3 bg-dark border-2 border-mc">
            <h1 className="text-light m-2 px-2">{heading}</h1>
            <div className="row g-3 px-2 pb-2 pt-2">
                <div className="col-4">
                    <div className="border bg-card rounded-4 pb-2 pt-2 px-3 h-70">
                        <div className="text-light small fw-semibold">Collected</div>
                        <div className="fs-4 fw-bold mc-orange">{collected}</div>
                    </div>
                </div>
                <div className="col-4">
                   <div className="border bg-card rounded-4 pb-2 pt-2 px-3 h-70">
                        <div className="text-light small fw-semibold">Missing</div>
                        <div className="fs-4 fw-bold mc-orange">{missing}</div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="border bg-card rounded-4 pb-2 pt-2 px-3 h-70">
                        <div className="text-light small fw-semibold">Duplicates</div>
                        <div className="fs-4 fw-bold mc-orange">{duplicates}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CompletionProgress