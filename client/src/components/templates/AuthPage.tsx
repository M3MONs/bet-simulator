import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AuthPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #d2161e;

    .close-icon {
        cursor: pointer;
        margin: 0.7rem 2rem;
        color: white;
    }
`;

type AuthPageProps = {
    children: React.ReactNode;
    background?: string;
};

const AuthPage = ({ children }: AuthPageProps) => {
    const navigate = useNavigate();
    return (
        <AuthPageWrapper>
            <IoIosClose size={32} onClick={() => navigate("/")} className='close-icon' />
            {children}
        </AuthPageWrapper>
    );
};

export default AuthPage;
