import {
    BettingSlipContent,
    BettingSlipFooter,
    BettingSlipHeader,
    BettingSlipWrapper,
} from "./BettingSlip.style";
import EmptyBettingSlip from "src/components/molecules/EmptyBettingSlip/EmptyBettingSlip";
import BettingSlipCalculator from "src/components/molecules/BettingSlipCalculator/BettingSlipCalculator";
import { useBettingContext } from "src/context/BettingSlipContext";
import BettingSlipPick from "src/components/molecules/BettingSlipPick/BettingSlipPick";
import BettingSlipStake from "src/components/molecules/BettingSlipStake/BettingSlipStake";
import NormalButton from "src/components/atoms/NormalButton";
import { useAuth } from "src/context/AuthContext";

const getHeader = (selectedBets: number) => {
    if (selectedBets === 0) {
        return "No event selected";
    }

    if (selectedBets === 1) {
        return "1 event selected";
    }

    return `${selectedBets} events selected`;
};

const BettingSlip = () => {
    const { selectedBets, canBet } = useBettingContext();
    const { accessToken } = useAuth();

    return (
        <BettingSlipWrapper>
            <BettingSlipHeader>{getHeader(selectedBets.length)}</BettingSlipHeader>
            <BettingSlipContent>
                {selectedBets.length > 0 ? (
                    selectedBets.map((bet, index) => <BettingSlipPick bet={bet} key={index} />)
                ) : (
                    <EmptyBettingSlip />
                )}
            </BettingSlipContent>
            <BettingSlipFooter>
                {selectedBets.length > 0 && <BettingSlipStake />}
                <BettingSlipCalculator />
                <NormalButton disabled={!canBet || accessToken === null}>Bet</NormalButton>
            </BettingSlipFooter>
        </BettingSlipWrapper>
    );
};

export default BettingSlip;
