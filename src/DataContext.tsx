import React, { createContext, useContext, useState, useEffect } from "react";
import type {Team} from "./types/Team";
import { createAllTeams } from "./types/Team";

type TeamContextType = {
    teams: Team[];
    updateStickerQuantity: (teamCode: string, stickerNumber: number, increaseQuantity: boolean) => void;
    setStickerCollected: (teamCode: string, stickerNumber: number) => void
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function TeamProvider({children} : {children: React.ReactNode}) {
    const [teams, setTeams] = useState<Team[]>(() => JSON.parse(localStorage.getItem("JR.WC.Data") ?? "null") ?? createAllTeams());

    function setStickerCollected(teamCode: string, stickerNumber: number){
        setTeams(teams =>
        teams.map(team =>
                team.code === teamCode ? {
                        ...team,
                        stickers: team.stickers.map((sticker) =>
                            sticker.number === stickerNumber && sticker.quantity == 0
                                ? { ...sticker, quantity: sticker.quantity = 1 }
                                : sticker
                        )
                    }
                    : team
            )
        )
    }

    function updateStickerQuantity(teamCode: string, stickerNumber: number, increaseQuantity: boolean){
    setTeams(teams =>
        teams.map(team =>
                team.code === teamCode ? {
                        ...team,
                        stickers: team.stickers.map((sticker) =>
                            sticker.number === stickerNumber
                                ? { ...sticker, quantity: sticker.quantity + (increaseQuantity ? 1 : -1) }
                                : sticker
                        )
                    }
                    : team
            )
        )
    }

    useEffect(() => {
        localStorage.setItem("JR.WC.Data", JSON.stringify(teams));
    }, [teams]);

    return (
        <TeamContext.Provider value={{teams, updateStickerQuantity, setStickerCollected}}>
            {children}
        </TeamContext.Provider>
    )
}

export function useTeams() {
    const context = useContext(TeamContext);

    if(!context){
        throw new Error("UseTeams must be used inside TeamsProvider");
    }
    
    return context;
}
