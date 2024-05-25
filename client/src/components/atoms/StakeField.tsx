import styled from "styled-components";
import { useBettingContext } from "src/context/BettingSlipContext";

const StakeFieldInput = styled.input`
    width: 100%;
    max-width: 150px;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    outline: none;
    transition: 0.2s;
    &:focus {
        border: 1px solid #000;
    }
`;

const StakeField = () => {
    const { handleSetStake } = useBettingContext();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        handleSetStake(value ? value : 0);
    };

    return <StakeFieldInput placeholder='Stake' onChange={handleChange} type='number' min={0} />;
};

export default StakeField;
