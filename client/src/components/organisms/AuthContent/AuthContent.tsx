import { AuthContentContainer, AuthContentHeader } from "./AuthContent.style";
import LinkButton from "src/components/atoms/LinkButton";

type AuthContentProps = {
    children: React.ReactNode;
    type: "Login" | "Sign Up";
};

const AuthContent = ({ children, type }: AuthContentProps) => {
    return (
        <AuthContentContainer>
            <AuthContentHeader>BET-SITE</AuthContentHeader>
            {children}
            <LinkButton to={type === "Login" ? "/register" : "/login"} sx={{ fontSize: "1rem" }}>
                {type === "Login" ? "Don't have an account?" : "Already have an account?"}
            </LinkButton>
        </AuthContentContainer>
    );
};

export default AuthContent;
