import { Link } from "react-router-dom";
import styled from "styled-components";

type NavbarLinkProps = {
    to: string;
    name: string;
};

const NavbarLinkContainer = styled.li`
    list-style: none;
    a {
        text-decoration: none;
        color: white;
        font-weight: 500;
        padding: 0.5rem 1rem;
        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
`;

const NavbarLink = ({ to, name }: NavbarLinkProps) => {
    return (
        <NavbarLinkContainer>
            <Link to={to} type='li'>
                {name}
            </Link>
        </NavbarLinkContainer>
    );
};

export default NavbarLink;
