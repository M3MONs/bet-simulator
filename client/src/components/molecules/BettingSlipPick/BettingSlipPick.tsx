import { IoIosClose } from "react-icons/io";
import {
    BettingSlipContent,
    BettingSlipPickWrapper,
    BettingSlipTeams,
} from "./BettingSlipPick.style";
import { useBettingContext } from "src/context/BettingSlipContext";

type BettingSlipPickProps = {
    bet: {
        event: number;
        bet: number;
        teams: string;
        pick: string;
        odd: number;
    };
};

const BettingSlipPick = ({ bet }: BettingSlipPickProps) => {
    const { event, teams, pick, odd } = bet;
    const { removeBet } = useBettingContext();

    const handleRemoveBet = () => {
        removeBet(event);
    };

    return (
        <BettingSlipPickWrapper>
            <BettingSlipTeams>
                {teams}
                <IoIosClose size={24} cursor={"pointer"} onClick={handleRemoveBet} />
            </BettingSlipTeams>
            <BettingSlipContent>
                <h3>{pick}</h3>
                <h3>{odd}</h3>
            </BettingSlipContent>
        </BettingSlipPickWrapper>
    );
};

export default BettingSlipPick;
