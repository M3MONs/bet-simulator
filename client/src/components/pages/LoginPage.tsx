import AuthForm from "../molecules/AuthForm/AuthForm";
import AuthInput from "../atoms/AuthInput";
import AuthContent from "../organisms/AuthContent/AuthContent";
import AuthPage from "../templates/AuthPage";
import { useCallback, useState } from "react";
import LinkButton from "../atoms/LinkButton";
import NormalButton from "../atoms/NormalButton";

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handleLogin = useCallback(() => {
        // TODO: Implement login logic
    }, [login, password]);

    return (
        <AuthPage>
            <AuthContent type='Login'>
                <AuthForm title='Login'>
                    <AuthInput placeholder='Login' type='text' handleChange={handleLoginChange} />
                    <AuthInput
                        placeholder='Password'
                        type='password'
                        handleChange={handlePasswordChange}
                    />
                    <NormalButton handleClick={handleLogin}>Login</NormalButton>
                    <LinkButton to='#' sx={{ color: "red", fontWeight: "bold", fontSize: "1rem" }}>
                        Forgot password?
                    </LinkButton>
                </AuthForm>
            </AuthContent>
        </AuthPage>
    );
};

export default LoginPage;
