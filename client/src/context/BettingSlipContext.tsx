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
    canBet: boolean;
    addBet: (bet: BetProps) => void;
    removeBet: (event: number) => void;
    getTotalOdds: () => number;
    getPotentialWin: () => string;
    handleSetStake: (value: number) => void;
}

const BettingSlipContext = createContext<BettingSlipContextProps>({
    selectedBets: [],
    canBet: false,
    addBet: () => {},
    removeBet: () => {},
    getTotalOdds: () => 0,
    getPotentialWin: () => "",
    handleSetStake: () => {},
});

const BettingSlipContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedBets, setSelectedBets] = useState<BetProps[]>([]);
    const [stake, setStake] = useState<number>(0);

    const canBet = selectedBets.length > 0 && stake > 0;

    const addBet = (bet: BetProps) => {
        setSelectedBets((prevBets) => {
            const updatedBets = prevBets.map((b) => (b.event === bet.event ? bet : b));
            const betExists = prevBets.some((b) => b.event === bet.event);
            return betExists ? updatedBets : [...prevBets, bet];
        });
    };

    const removeBet = (event: number) => {
        setSelectedBets((prevBets) => prevBets.filter((bet) => bet.event !== event));
    };

    const handleSetStake = (value: number) => {
        setStake(value);
    };

    const getTotalOdds = () => {
        const totalOdds = selectedBets.reduce((total, bet) => total * bet.odd, 1);
        return parseFloat(totalOdds.toFixed(2));
    };

    const getPotentialWin = () => {
        return (getTotalOdds() * stake).toFixed(2);
    };

    const values = {
        selectedBets,
        canBet,
        addBet,
        removeBet,
        getTotalOdds,
        getPotentialWin,
        handleSetStake,
    };

    return <BettingSlipContext.Provider value={values}>{children}</BettingSlipContext.Provider>;
};

export default BettingSlipContextProvider;

export const useBettingContext = () => useContext(BettingSlipContext);
