import { Link } from 'react-router-dom';

interface TeamCardProps{
    name: string;
    collected: number,
    completion: number;
}

function TeamCard({name, collected, completion}: TeamCardProps){
    return (
        <Link to={`/teams/${name}`} className='text-decoration-none text-dark'>
        <div className="border rounded-4 border-success shadow-sm col-12">
            <div className="d-flex align-items-center justify-content-between p-3">
                <div className="d-flex text-start align-items-center gap-3">
                    <div>
                        <div className="fw-bold fs-5 lh-sm">{name}</div>
                        <div className="text-secondary small">{collected} collected</div>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center
                                    border bg-success-subtle border-success test-success fw-bold"
                                    style={{width:"50px", height:"50px"}}>{completion}%</div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default TeamCard