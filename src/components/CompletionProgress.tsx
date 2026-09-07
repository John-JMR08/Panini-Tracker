import ProgressBlock from "./ProgressBlock";

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
                   <ProgressBlock heading="Collected" number={collected} />
                </div>
                <div className="col-4">
                   <ProgressBlock heading="Missing" number={missing} />
                </div>
                <div className="col-4">
                     <ProgressBlock heading="Duplicate" number={duplicates} />
                </div>
            </div>
        </div>
        </>
    );
}

export default CompletionProgress