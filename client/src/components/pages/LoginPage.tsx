import { useCallback, useState } from "react";
import { useAuth } from "src/context/AuthContext";
import AuthForm from "../molecules/AuthForm/AuthForm";
import AuthPage from "../templates/AuthPage";
import LinkButton from "../atoms/LinkButton";
import NormalButton from "../atoms/NormalButton";
import AuthContent from "../organisms/AuthContent/AuthContent";
import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    const handleUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handleLogin = useCallback(async () => {
        // TODO: Add toast notification
        try {
            await login(username, password);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }, [username, password, login, navigate]);

    return (
        <AuthPage>
            <AuthContent type='Login'>
                <AuthForm title='Login' submitFunction={handleLogin}>
                    <Input placeholder='Login' type='text' handleChange={handleUsernameChange} />
                    <Input
                        placeholder='Password'
                        type='password'
                        handleChange={handlePasswordChange}
                    />
                    <NormalButton type='submit'>Login</NormalButton>
                    <LinkButton to='#' sx={{ color: "red", fontWeight: "bold", fontSize: "1rem" }}>
                        Forgot password?
                    </LinkButton>
                </AuthForm>
            </AuthContent>
        </AuthPage>
    );
};

export default LoginPage;
