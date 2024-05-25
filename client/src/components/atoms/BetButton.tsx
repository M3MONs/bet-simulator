import styled from "styled-components";

type BetButtonProps = {
    result?: string;
    odd: number;
    keyProp?: number;
    handleClick?: (keyProp: number) => void;
    isClickable?: boolean;
};

const BetButtonWrapper = styled.button<{ isClickable: boolean }>`
    background: #ffcc00;
    border: none;
    border-radius: 0.5rem;
    min-width: 5.2rem;
    width: 150px;

    padding: ${(props) => (props.isClickable ? "0.2rem 0.8rem" : "0.5rem 0.8rem")};
    cursor: ${(props) => (props.isClickable ? "pointer" : "default")};

    ${(props) =>
        props.isClickable &&
        `
            &:hover {
                background: #ffdd54;
            }
        `}
`;

const ResultText = styled.span`
    font-size: 0.7rem;
    color: #25282f;
`;

const BetButton = ({
    result,
    odd,
    keyProp = 0,
    handleClick = () => {},
    isClickable = true,
}: BetButtonProps) => {
    const handleButtonClick = () => {
        handleClick(keyProp);
    };

    return (
        <BetButtonWrapper onClick={handleButtonClick} isClickable={isClickable}>
            {result && <ResultText>{result}</ResultText>}
            <h3>{odd}</h3>
        </BetButtonWrapper>
    );
};

export default BetButton;
