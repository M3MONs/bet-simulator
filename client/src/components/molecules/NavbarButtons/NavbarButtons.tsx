import LinkButton from "src/components/atoms/LinkButton";
import { NavbarButtonsContainer } from "./NavbarButtons.style";
import { useAuth } from "src/context/AuthContext";
import NormalButton from "src/components/atoms/NormalButton";
import { FaUserCircle } from "react-icons/fa";

const NavbarButtons = () => {
    const { accessToken, logout } = useAuth();
    return (
        <NavbarButtonsContainer>
            {accessToken ? (
                <>
                    <LinkButton to='/profile'>
                        <FaUserCircle size={22} />
                    </LinkButton>
                    <NormalButton sx={{ background: "white" }} handleClick={logout}>
                        Logout
                    </NormalButton>
                </>
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
