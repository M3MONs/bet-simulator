import AuthButton from "src/components/atoms/AuthButton";
import { AuthContentContainer, AuthContentHeader } from "./AuthContent.style";
import { useNavigate } from "react-router-dom";

type AuthContentProps = {
    children: React.ReactNode;
    type: "Login" | "Sign Up";
};

const AuthContent = ({ children, type }: AuthContentProps) => {
    const navigate = useNavigate();

    return (
        <AuthContentContainer>
            <AuthContentHeader>BET-SITE</AuthContentHeader>
            {children}
            <AuthButton
                name={type === "Login" ? "Sign Up" : "Login"}
                background='inherit'
                color='white'
                handleClick={() => navigate(type === "Login" ? "/register" : "/login")}
            />
        </AuthContentContainer>
    );
};

export default AuthContent;
