import { useBettingContext } from "src/context/BettingSlipContext";
import { BettingSlipCalculatorWrapper } from "./BettingSlipCalculator.style";

const BettingSlipCalculator = () => {
    const { getPotentialWin } = useBettingContext();
    return (
        <BettingSlipCalculatorWrapper>
            <h4>Potential win:</h4>
            <h4>{getPotentialWin()}</h4>
        </BettingSlipCalculatorWrapper>
    );
};

export default BettingSlipCalculator;
