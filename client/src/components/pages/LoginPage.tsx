import AuthForm from "../molecules/AuthForm/AuthForm";
import AuthInput from "../atoms/AuthInput";
import AuthButton from "../atoms/AuthButton";
import AuthContent from "../organisms/AuthContent/AuthContent";
import AuthPage from "../templates/AuthPage";
import { useCallback, useState } from "react";

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
                    <AuthButton name='Login' handleClick={handleLogin} />
                    <AuthButton name='Forgot password?' background='white' color='#d2161e' />
                </AuthForm>
            </AuthContent>
        </AuthPage>
    );
};

export default LoginPage;
