import styled from "styled-components";

const ErrorWrapper = styled.p`
    color: red;
    font-size: 0.75rem;
    font-weight: bold;
    flex: 1;
    margin: 0 10px;
`;

const Error = ({ children }: { children: string }) => {
    return <ErrorWrapper>{children}</ErrorWrapper>;
};

export default Error;
