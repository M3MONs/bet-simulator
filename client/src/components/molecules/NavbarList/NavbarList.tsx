import NavbarLink from "src/components/atoms/NavbarLink";
import { NavbarListContainer } from "./NavbarList.style";

const NavbarList = () => {
    return (
        <NavbarListContainer>
            <NavbarLink to='#' name='Bets' />
            <NavbarLink to='#' name='Coupons' />
        </NavbarListContainer>
    );
};

export default NavbarList;
