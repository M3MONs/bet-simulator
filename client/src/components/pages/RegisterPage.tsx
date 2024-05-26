import { useCallback, useState } from "react";
import AuthButton from "../atoms/AuthButton";
import AuthInput from "../atoms/AuthInput";
import AuthForm from "../molecules/AuthForm/AuthForm";
import AuthContent from "../organisms/AuthContent/AuthContent";
import AuthPage from "../templates/AuthPage";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        login: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    const handleSignUp = () => {
        // TODO: Implement sign up logic
        console.log(formData);
    };

    return (
        <AuthPage>
            <AuthContent type='Sign Up'>
                <AuthForm title='Sign Up'>
                    <AuthInput
                        placeholder='Login'
                        type='text'
                        handleChange={handleChange}
                        name='login'
                    />
                    <AuthInput
                        placeholder='Email'
                        type='email'
                        handleChange={handleChange}
                        name='email'
                    />
                    <AuthInput
                        placeholder='Password'
                        type='password'
                        handleChange={handleChange}
                        name='password'
                    />
                    <AuthInput
                        placeholder='Repeat password'
                        type='password'
                        handleChange={handleChange}
                        name='repeatPassword'
                    />
                    <AuthButton name='Sign Up' handleClick={handleSignUp} />
                </AuthForm>
            </AuthContent>
        </AuthPage>
    );
};

export default RegisterPage;
