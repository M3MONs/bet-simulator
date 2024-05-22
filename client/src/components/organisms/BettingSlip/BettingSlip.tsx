import {
    BettingSlipBetBtn,
    BettingSlipContent,
    BettingSlipFooter,
    BettingSlipHeader,
    BettingSlipWrapper,
} from "./BettingSlip.style";
import EmptyBettingSlip from "src/components/molecules/EmptyBettingSlip/EmptyBettingSlip";
import BettingSlipCalculator from "src/components/molecules/BettingSlipCalculator/BettingSlipCalculator";

const BettingSlip = () => {
    return (
        <BettingSlipWrapper>
            <BettingSlipHeader>No bets selected</BettingSlipHeader>
            <BettingSlipContent>
                <EmptyBettingSlip />
            </BettingSlipContent>
            <BettingSlipFooter>
                <BettingSlipCalculator />
                <BettingSlipBetBtn disabled>Bet</BettingSlipBetBtn>
            </BettingSlipFooter>
        </BettingSlipWrapper>
    );
};

export default BettingSlip;
