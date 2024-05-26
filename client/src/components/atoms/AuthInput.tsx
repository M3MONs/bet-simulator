import styled from "styled-components";

const Input = styled.input`
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
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type: string;
    name?: string;
};

const AuthInput = ({ handleChange, placeholder, type, name }: AuthInputProps) => {
    return (
        <Input
            placeholder={placeholder}
            type={type}
            onChange={(e) => handleChange(e)}
            name={name}
        />
    );
};

export default AuthInput;
