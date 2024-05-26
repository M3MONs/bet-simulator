import { NavbarButtonsContainer } from "./NavbarButtons.style";
import NavbarButton from "src/components/atoms/NavbarButton";

const NavbarButtons = () => {
    return (
        <NavbarButtonsContainer>
            <NavbarButton name='Login' to='/login' />
            <NavbarButton name='Sign up' to='/register' />
        </NavbarButtonsContainer>
    );
};

export default NavbarButtons;
