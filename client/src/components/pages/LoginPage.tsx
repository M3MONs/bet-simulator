import AuthForm from "../molecules/AuthForm/AuthForm";
import AuthInput from "../atoms/AuthInput";
import AuthButton from "../atoms/AuthButton";
import AuthContent from "../organisms/AuthContent/AuthContent";
import AuthPage from "../templates/AuthPage";

const LoginPage = () => {
    return (
        <AuthPage>
            <AuthContent type='Login'>
                <AuthForm title='Login'>
                    <AuthInput placeholder='Login' type='text' />
                    <AuthInput placeholder='Password' type='password' />
                    <AuthButton name='Login' />
                    <AuthButton name='Forgot password?' background='white' color='#d2161e' />
                </AuthForm>
            </AuthContent>
        </AuthPage>
    );
};

export default LoginPage;
