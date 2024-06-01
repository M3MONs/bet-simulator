import { useCallback, useState } from "react";
import AuthForm from "../molecules/AuthForm/AuthForm";
import AuthContent from "../organisms/AuthContent/AuthContent";
import AuthPage from "../templates/AuthPage";
import NormalButton from "../atoms/NormalButton";
import { ErrorsProps, validateRegisterForm } from "../utils/validators";
import Input from "../atoms/Input";
import ValidationInput from "../molecules/ValidationInput/ValidationInput";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        login: "",
        email: "",
        password: "",
        repeatPassword: "",
    });
    const [errors, setErrors] = useState<ErrorsProps>({});

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    const handleSignUp = () => {
        const { login, email, password, repeatPassword } = formData;
        const { isValid, errors } = validateRegisterForm(email, login, password, repeatPassword);
        setErrors(errors);
        if (isValid) {
            // TODO: Implement sign up backend request
        }
    };

    return (
        <AuthPage>
            <AuthContent type='Sign Up'>
                <AuthForm title='Sign Up' submitFunction={handleSignUp}>
                    <ValidationInput
                        children={
                            <Input
                                handleChange={handleChange}
                                name='login'
                                placeholder='Login'
                                type='text'
                            />
                        }
                        error={errors.username}
                    />
                    <ValidationInput
                        children={
                            <Input
                                placeholder='Email'
                                type='email'
                                handleChange={handleChange}
                                name='email'
                            />
                        }
                        error={errors.email}
                    />
                    <ValidationInput
                        children={
                            <Input
                                placeholder='Password'
                                type='password'
                                handleChange={handleChange}
                                name='password'
                            />
                        }
                    />
                    <ValidationInput
                        children={
                            <Input
                                placeholder='Repeat password'
                                type='password'
                                handleChange={handleChange}
                                name='repeatPassword'
                            />
                        }
                        error={errors.password}
                    />
                    <NormalButton type='submit'>Sign Up</NormalButton>
                </AuthForm>
            </AuthContent>
        </AuthPage>
    );
};

export default RegisterPage;
