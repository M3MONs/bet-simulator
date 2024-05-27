import LinkButton from "src/components/atoms/LinkButton";
import { NavbarButtonsContainer } from "./NavbarButtons.style";

const NavbarButtons = () => {
    return (
        <NavbarButtonsContainer>
            <LinkButton to='/login' sx={{ background: "white" }}>
                Login
            </LinkButton>
            <LinkButton to='/register' sx={{ background: "white" }}>
                Register
            </LinkButton>
        </NavbarButtonsContainer>
    );
};

export default NavbarButtons;
