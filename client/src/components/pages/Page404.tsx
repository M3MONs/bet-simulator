import styled from "styled-components";
import { TbError404 } from "react-icons/tb";
import AuthPage from "../templates/AuthPage";

const Main = styled.main`
    position: absolute;
    width: 100%;
    height: calc(100vh - 2rem);
    top: 2rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #d2161e;
    color: white;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    line-break: auto;
`;

const Page404 = () => {
    return (
        <AuthPage>
            <Main>
                <TbError404 size={150} />
                <Title>Page Not Found</Title>
            </Main>
        </AuthPage>
    );
};

export default Page404;
