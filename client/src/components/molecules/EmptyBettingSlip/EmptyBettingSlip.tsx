import { FaRegHandPeace } from "react-icons/fa6";
import { EmptyBettingSlipWrapper } from "./EmptyBettingSlip.style";

const EmptyBettingSlip = () => {
    return (
        <EmptyBettingSlipWrapper>
            <FaRegHandPeace size={90} />
            <h3>Add your first bet!</h3>
            <p>
                You do not have any bets.
                <br />
                Click odds to add bets.
            </p>
        </EmptyBettingSlipWrapper>
    );
};

export default EmptyBettingSlip;
