import BetButton from "src/components/atoms/BetButton";
import { BettingSlipStakeWrapper } from "./BettingSlipStake.style";
import StakeField from "src/components/atoms/StakeField";
import { useBettingContext } from "src/context/BettingSlipContext";

const BettingSlipStake = () => {
    const { getTotalOdds } = useBettingContext();
    return (
        <BettingSlipStakeWrapper>
            <StakeField />
            <BetButton result='' odd={getTotalOdds()} isClickable={false} />
        </BettingSlipStakeWrapper>
    );
};

export default BettingSlipStake;
