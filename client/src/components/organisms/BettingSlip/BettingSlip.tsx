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
import BettingSlipStake from "src/components/molecules/BettingSlipStake/BettingSlipStake";

const BettingSlip = () => {
    const { selectedBets, canBet } = useBettingContext();

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
                {selectedBets.length > 0 && <BettingSlipStake />}
                <BettingSlipCalculator />
                <BettingSlipBetBtn disabled={canBet ? false : true}>Bet</BettingSlipBetBtn>
            </BettingSlipFooter>
        </BettingSlipWrapper>
    );
};

export default BettingSlip;
