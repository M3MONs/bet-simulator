import { NavbarListContainer } from "./NavbarList.style";
import LinkButton from "src/components/atoms/LinkButton";

const NavbarList = () => {
    return (
        <NavbarListContainer>
            <LinkButton to='/' sx={{ fontSize: "1rem" }}>
                Bets
            </LinkButton>
            <LinkButton to='/' sx={{ fontSize: "1rem" }}>
                Coupons
            </LinkButton>
        </NavbarListContainer>
    );
};

export default NavbarList;
