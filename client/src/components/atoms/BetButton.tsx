import styled from "styled-components";

type BetButtonProps = {
    result?: string;
    odd?: number;
};

const BetButtonWrapper = styled.button`
    padding: 0.2rem 0.8rem;
    background: #ffcc00;
    border: none;
    border-radius: 0.5rem;
    min-width: 5.2rem;
    width: 150px;
    cursor: pointer;

    text {
        font-size: 0.7rem;
        color: #25282f;
    }

    &:hover {
        background: #ffdd54;
    }
`;

const BetButton = ({ result, odd }: BetButtonProps) => {
    return (
        <BetButtonWrapper>
            <text>{result}</text>
            <h3>{odd}</h3>
        </BetButtonWrapper>
    );
};

export default BetButton;
