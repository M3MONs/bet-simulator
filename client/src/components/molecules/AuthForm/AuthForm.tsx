import { AuthFormContainer, AuthFormTitle } from "./AuthForm.style";

type AuthFormProps = {
    children: React.ReactNode;
    title: string;
};

const AuthForm = ({ children, title }: AuthFormProps) => {
    return (
        <AuthFormContainer>
            <AuthFormTitle>{title}</AuthFormTitle>
            {children}
        </AuthFormContainer>
    );
};

export default AuthForm;
