import React from "react";
import { NavbarButtonsContainer } from "./NavbarButtons.style";
import NavbarButton from "src/components/atoms/NavbarButton";

const NavbarButtons = () => {
    return (
        <NavbarButtonsContainer>
            <NavbarButton name='Login' to='#' />
            <NavbarButton name='Sign up' to='#' />
        </NavbarButtonsContainer>
    );
};

export default NavbarButtons;
