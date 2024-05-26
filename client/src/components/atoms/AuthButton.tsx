import styled from "styled-components";

const AuthButtonContainer = styled.button<{ color: string; background: string }>`
    cursor: pointer;
    width: 300px;
    padding: 0.75rem 1rem;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 0.9rem;

    &:hover {
        opacity: 0.6;
    }
`;

type AuthButtonProps = {
    name?: string;
    handleClick?: () => void;
    color?: string;
    background?: string;
};

const AuthButton = ({
    name,
    handleClick,
    color = "white",
    background = "#d2161e",
}: AuthButtonProps) => {
    return (
        <AuthButtonContainer color={color} background={background} onClick={handleClick}>
            {name}
        </AuthButtonContainer>
    );
};

export default AuthButton;
