import React from "react";
import { ValidationInputWrapper } from "./ValidationInput.style";
import ErrorText from "src/components/atoms/Error";

type AuthInputProps = {
    children: React.ReactNode;
    error?: string;
};

const ValidationInput = ({ children, error }: AuthInputProps) => {
    return (
        <ValidationInputWrapper>
            {children}
            {error && <ErrorText>{error}</ErrorText>}
        </ValidationInputWrapper>
    );
};

export default ValidationInput;
