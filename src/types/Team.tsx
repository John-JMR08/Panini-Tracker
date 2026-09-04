import type {Sticker} from "./Sticker"

export interface Team {
    name: string;
    code: string,
    stickers: Sticker[];
}

function createTeam(name: string, code: string) : Team {
    return {
        name,
        code,
        stickers: Array.from({length: 20}, (_, index) => ({
            number: index + 1,
            quantity: 0
        }))
    };
}

export function createAllTeams() : Team[] {
    return [
        createTeam("Mexico", "MEX"),
        createTeam("South Africa", "RSA"),
        createTeam("South Korea", "KOR"),
        createTeam("Czech Republic", "CZE"),
        createTeam("Canada", "CAN"),
        createTeam("Bosnia & Herzegovina", "BIH"),
        createTeam("Qatar", "QAT"),
        createTeam("Switzerland", "SUI"),
        createTeam("Brazil", "BRA"),
        createTeam("Morocco", "MAR"),
        createTeam("Haiti", "HAI"),
        createTeam("Scotland", "SCO"),
        createTeam("USA", "USA"),
        createTeam("Paraguay", "PAR"),
        createTeam("Australia", "AUS"),
        createTeam("Turkey", "TUR"),
        createTeam("Germany", "GER"),
        createTeam("Curacao", "CUW"),
        createTeam("Ivory Coast", "CIV"),
        createTeam("Ecuador", "ECU"),
        createTeam("Netherlands", "NED"),
        createTeam("Japan", "JAP"),
        createTeam("Sweden", "SWE"),
        createTeam("Tunisia", "TUN"),
        createTeam("Belgium", "BEL"),
        createTeam("Egypt", "EGY"),
        createTeam("Iran", "IRN"),
        createTeam("New Zealand", "NZL"),
        createTeam("Spain", "ESP"),
        createTeam("Cape Verde", "CPV"),
        createTeam("Saudi Arabia", "KSA"),
        createTeam("Uruguay", "URU"),
        createTeam("France", "FRA"),
        createTeam("Senegal", "SEN"),
        createTeam("Iraq", "IRQ"),
        createTeam("Norway", "NOR"),
        createTeam("Argentina", "ARG"),
        createTeam("Algeria", "ALG"),
        createTeam("Austria", "AUT"),
        createTeam("Jordan", "JOR"),
        createTeam("Portugal", "POR"),
        createTeam("DR Congo", "COD"),
        createTeam("Uzbekistan", "UZB"),
        createTeam("Colombia", "COL"),
        createTeam("England", "ENG"),
        createTeam("Croatia", "CRO"),
        createTeam("Ghana", "GHA"),
        createTeam("Panama", "PAN")
    ];
}
