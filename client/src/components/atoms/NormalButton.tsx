import styled from "styled-components";

const Button = styled.button<{ sx?: { [key: string]: string } }>`
    width: 100%;
    max-width: 300px;
    cursor: pointer;
    font-size: 0.85rem;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 5px;

    font-weight: ${(props) => props.sx?.fontWeight || "bold"};
    font-size: ${(props) => props.sx?.fontSize || "1rem"};
    color: ${(props) => props.sx?.color || "white"};
    background: ${(props) => props.sx?.background || "#d2161e"};

    &:hover {
        opacity: 0.6;
    }

    &:disabled {
        background: #ccc;
        color: #666;
        cursor: not-allowed;
    }
`;

type NormalButtonProps = {
    children?: React.ReactNode;
    sx?: { [key: string]: string };
    handleClick?: () => void;
    disabled?: boolean;
};

const NormalButton = ({ children, handleClick, disabled }: NormalButtonProps) => {
    return (
        <Button onClick={handleClick} disabled={disabled}>
            {children}
        </Button>
    );
};

export default NormalButton;
