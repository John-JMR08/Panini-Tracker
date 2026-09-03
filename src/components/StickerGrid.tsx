import { useParams, Link } from "react-router-dom";
import { useTeams} from "../DataContext";
import StickerCard from "./StickerCard"
import CompletionProgress from "./CompletionProgress";

function StickerGrid() {
    const { id } = useParams<{id: string}>();
    const { teams, updateStickerQuantity, setStickerCollected } = useTeams();
    
    const team = teams.find(team => team.name === id);
    const stickers = team?.stickers ?? [];

    const setCollected = (stickerNumber: number) => {
        console.log("HERE 1");
        setStickerCollected(team?.code ?? "", stickerNumber);
    }

    const updateQuantity = (stickerNumber: number, increase: boolean) => {
        updateStickerQuantity(team?.code ?? "", stickerNumber, increase)
    }

    return(
        <>
        <div className="container">
            <div className="row g-2">
                <CompletionProgress heading={team?.name ?? ""} missing={stickers.filter(x => x.quantity == 0).length} collected={stickers.filter(x => x.quantity > 0).length} duplicates={stickers.filter(x => x.quantity > 1).length}/>
            </div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" className='mc-orange'>&lt;&lt; Back</Link></li>
                </ol>
            </nav>
            <div className="row g-2 mb-2">
                {stickers.map((sticker, index) => (
                    <StickerCard key={index} number={sticker.number} quantity={sticker.quantity} onCollected={() => setCollected(sticker.number)} onQuantityUpdated={(increase: boolean) => updateQuantity(sticker.number, increase)} />
                ))}
            </div>
        </div>
        </>
    );
}

export default StickerGrid