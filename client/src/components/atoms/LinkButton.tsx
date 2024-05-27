import { rgba } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)<{ sx?: { [key: string]: string } }>`
    text-decoration: none;
    font-weight: ${(props) => props.sx?.fontWeight || "500"};
    font-size: ${(props) => props.sx?.fontSize || ".85rem"};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: background 0.2s;

    color: ${(props) => props.sx?.color || "white"};
    background: ${(props) => (props.sx?.background ? rgba(props.sx?.background, 0.3) : "none")};

    &:hover {
        ${(props) =>
            props.sx?.background
                ? `background: ${rgba(props.sx?.background, 0.4)};`
                : "opacity: 0.6;"}
    }
`;

type LinkButtonProps = {
    to?: string;
    children?: React.ReactNode;
    sx?: { [key: string]: string };
};

const LinkButton = ({ to = "#", children, sx }: LinkButtonProps) => {
    return (
        <Button to={to} sx={sx}>
            {children}
        </Button>
    );
};

export default LinkButton;
