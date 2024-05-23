import {
    BettingSlipBetBtn,
    BettingSlipContent,
    BettingSlipFooter,
    BettingSlipHeader,
    BettingSlipWrapper,
} from "./BettingSlip.style";
import EmptyBettingSlip from "src/components/molecules/EmptyBettingSlip/EmptyBettingSlip";
import BettingSlipCalculator from "src/components/molecules/BettingSlipCalculator/BettingSlipCalculator";
import { useBettingContext } from "src/context/BettingSlipContext";
import BettingSlipPick from "src/components/molecules/BettingSlipPick/BettingSlipPick";

const BettingSlip = () => {
    const { selectedBets } = useBettingContext();
    console.log(selectedBets);
    return (
        <BettingSlipWrapper>
            <BettingSlipHeader>No bets selected</BettingSlipHeader>
            <BettingSlipContent>
                {selectedBets.length > 0 ? (
                    selectedBets.map((bet, index) => <BettingSlipPick bet={bet} key={index} />)
                ) : (
                    <EmptyBettingSlip />
                )}
            </BettingSlipContent>
            <BettingSlipFooter>
                <BettingSlipCalculator />
                <BettingSlipBetBtn disabled>Bet</BettingSlipBetBtn>
            </BettingSlipFooter>
        </BettingSlipWrapper>
    );
};

export default BettingSlip;
