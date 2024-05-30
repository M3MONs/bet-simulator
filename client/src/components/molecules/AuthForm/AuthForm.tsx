import { AuthFormContainer, AuthFormTitle } from "./AuthForm.style";

type AuthFormProps = {
    children: React.ReactNode;
    title: string;
    submitFunction?: () => void;
};

const AuthForm = ({ children, title, submitFunction }: AuthFormProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (submitFunction) {
            submitFunction();
        }
    };

    return (
        <AuthFormContainer onSubmit={handleSubmit}>
            <AuthFormTitle>{title}</AuthFormTitle>
            {children}
        </AuthFormContainer>
    );
};

export default AuthForm;
