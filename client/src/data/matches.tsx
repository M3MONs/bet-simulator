import { IT, PL } from "country-flag-icons/react/3x2";

export const matches = [
    {
        head: "Serie A • Round 38",
        match: "AC Milan vs Salernitana",
        flag: <IT />,
        odds: [
            { odd: 1.25, result: "Ac Milan" },
            { odd: 3.5, result: "Draw" },
            { odd: 5.5, result: "Salernitana" },
        ],
    },
    {
        head: "Ekstraklasa • Round 38",
        match: "Zagłębie Lubin vs ŁKS Łódź",
        flag: <PL />,
        odds: [
            { odd: 1.75, result: "Zagłębie Lubin" },
            { odd: 2.5, result: "Draw" },
            { odd: 2.25, result: "ŁKS Łódź" },
        ],
    },
];
