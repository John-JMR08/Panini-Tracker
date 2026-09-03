import CompletionProgress from "./CompletionProgress";
import TeamCard from "./TeamCard"
import { useTeams} from "../DataContext";

function TeamGrid(){
    const rawTeams: Team[] = JSON.parse(localStorage.getItem("JR.WC.Data") ?? "[]");
    const { teams } = useTeams();
    // const [teams, setTeams] = useState(
    //     createAllTeams()
    // );

    function getTotalCompletion() : number {
        return teams.reduce((count, team) => {
            return count + team.stickers.filter(sticker => sticker.quantity > 0).length;
        }, 0);
    }

    function getTotalMissing() : number {
         return teams.reduce((count, team) => {
            return count + team.stickers.filter(sticker => sticker.quantity == 0).length;
        }, 0);
    }

       function getTotalDuplicates() : number {
         return teams.reduce((count, team) => {
            return count + team.stickers.filter(sticker => sticker.quantity > 1).length;
        }, 0);
    }

    function getTeamCompletion(stickerQuantities: number[]){
        const total = stickerQuantities.length;
        const stickersGot = stickerQuantities.filter(quantity => quantity > 0).length;
        return total > 0 ? Math.round((stickersGot / total) * 100) : 0;
    }

    return(
        <div className="container">
            <div className="row g-2">
                <CompletionProgress heading="Panini World Cup Collection" missing={getTotalMissing()} collected={getTotalCompletion()} duplicates={getTotalDuplicates()}/>
            </div>
            <div className="row g-2 mb-2">
                {teams.map((team, index) => (
                    <TeamCard key={index} name={team.name} collected={team.stickers.filter(x => x.quantity > 0).length} completion={getTeamCompletion(team.stickers.map(sticker => sticker.quantity))} />
                    ))}
            </div>
        </div>
    )
}

export default TeamGrid
