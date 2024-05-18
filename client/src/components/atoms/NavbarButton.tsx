import { Link } from "react-router-dom";
import styled from "styled-components";

type NavbarButtonProps = {
    to: string;
    name: string;
};

const Button = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

const NavbarButton = ({ to, name }: NavbarButtonProps) => {
    return <Button to={to}>{name}</Button>;
};

export default NavbarButton;
