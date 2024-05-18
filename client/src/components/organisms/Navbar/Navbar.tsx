import { NavbarContainer, LeftNavbarContainer } from "./Navbar.style";
import NavbarLogo from "src/components/atoms/NavbarLogo";
import NavbarList from "src/components/molecules/NavbarList/NavbarList";
import NavbarButtons from "src/components/molecules/NavbarButtons/NavbarButtons";

const Navbar = () => {
    return (
        <NavbarContainer>
            <LeftNavbarContainer>
                <NavbarLogo title='bet-site' to='/' />
                <NavbarList />
            </LeftNavbarContainer>
            <NavbarButtons />
        </NavbarContainer>
    );
};

export default Navbar;
