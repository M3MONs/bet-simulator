import styled from "styled-components";

const InputContainer = styled.input`
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

type InputProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type: string;
    name?: string;
};

const Input = ({ handleChange, placeholder, type, name }: InputProps) => {
    return (
        <InputContainer
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
            type={type}
            name={name}
        />
    );
};

export default Input;
