import LinkButton from "src/components/atoms/LinkButton";
import { NavbarButtonsContainer } from "./NavbarButtons.style";
import { useAuth } from "src/context/AuthContext";
import NormalButton from "src/components/atoms/NormalButton";

const NavbarButtons = () => {
    const { accessToken, logout } = useAuth();
    return (
        <NavbarButtonsContainer>
            // TODO: User profile button
            {accessToken ? (
                <NormalButton sx={{ background: "white" }} handleClick={logout}>
                    Logout
                </NormalButton>
            ) : (
                <>
                    <LinkButton to='/login' sx={{ background: "white" }}>
                        Login
                    </LinkButton>
                    <LinkButton to='/register' sx={{ background: "white" }}>
                        Register
                    </LinkButton>
                </>
            )}
        </NavbarButtonsContainer>
    );
};

export default NavbarButtons;
