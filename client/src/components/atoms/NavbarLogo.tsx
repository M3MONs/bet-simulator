import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled(Link)`
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
`;

type NavbarLogoProps = {
    title: string;
    to: string;
};

const NavbarLogo = ({ title, to }: NavbarLogoProps) => {
    return (
        <LogoContainer to={to}>
            <h1>{title}</h1>
        </LogoContainer>
    );
};

export default NavbarLogo;
