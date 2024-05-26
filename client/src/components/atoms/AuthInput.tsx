import styled from "styled-components";

const AuthInputContainer = styled.input`
    width: 300px;
    padding: 1rem;
    border: 1px solid #ccc;
    background: #eef0f3;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: 0.3s;
    &:focus {
        border-color: #d2161e;
    }
`;

type AuthInputProps = {
    placeholder?: string;
    type?: string;
};

const AuthInput = ({ placeholder, type }: AuthInputProps) => {
    return <AuthInputContainer placeholder={placeholder} type={type} />;
};

export default AuthInput;
