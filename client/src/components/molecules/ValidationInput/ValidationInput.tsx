import React from "react";
import { ValidationInputWrapper } from "./ValidationInput.style";
import Error from "src/components/atoms/Error";

type AuthInputProps = {
    children: React.ReactNode;
    error?: string;
};

const ValidationInput = ({ children, error }: AuthInputProps) => {
    return (
        <ValidationInputWrapper>
            {children}
            {error && <Error>{error}</Error>}
        </ValidationInputWrapper>
    );
};

export default ValidationInput;
