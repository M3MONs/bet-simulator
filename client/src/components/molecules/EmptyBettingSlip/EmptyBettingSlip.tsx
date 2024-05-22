import { FaRegHandPeace } from "react-icons/fa6";

const EmptyBettingSlip = () => {
    return (
        <>
            <FaRegHandPeace size={90} />
            <h3>Add your first bet!</h3>
            <p>
                You do not have any bets.
                <br />
                Click odds to add bets.
            </p>
        </>
    );
};

export default EmptyBettingSlip;
