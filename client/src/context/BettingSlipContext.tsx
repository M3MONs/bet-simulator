import React, { createContext, useContext, useState } from "react";

type BetProps = {
    event: number;
    bet: number;
    teams: string;
    pick: string;
    odd: number;
};

interface BettingSlipContextProps {
    selectedBets: BetProps[];
    addBet: (bet: BetProps) => void;
}

const BettingSlipContext = createContext<BettingSlipContextProps>({
    selectedBets: [],
    addBet: () => {},
});

const BettingSlipContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedBets, setSelectedBets] = useState<BetProps[]>([]);

    const addBet = (bet: BetProps) => {
        setSelectedBets((prevBets) => {
            const updatedBets = prevBets.map((b) => (b.event === bet.event ? bet : b));
            const betExists = prevBets.some((b) => b.event === bet.event);
            return betExists ? updatedBets : [...prevBets, bet];
        });
    };

    return (
        <BettingSlipContext.Provider value={{ addBet, selectedBets }}>
            {children}
        </BettingSlipContext.Provider>
    );
};

export default BettingSlipContextProvider;

export const useBettingContext = () => useContext(BettingSlipContext);
