const arePasswordsEqual = (password: string, repeatPassword: string): boolean => {
    return password === repeatPassword;
};

const isPasswordValid = (password: string): boolean => {
    const hasMinimumLength = password.length >= 8;
    const hasNumber = /[0-9]/.test(password);
    const hasLowercaseLetter = /[a-z]/.test(password);
    const hasUppercaseLetter = /[A-Z]/.test(password);

    return hasMinimumLength && hasNumber && hasLowercaseLetter && hasUppercaseLetter;
};

const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isUsernameValid = (username: string): boolean => {
    return username.length >= 6;
};

export type ErrorsProps = { email?: string; username?: string; password?: string };

export const validateRegisterForm = (
    email: string,
    username: string,
    password: string,
    repeatPassword: string
): { isValid: boolean; errors: ErrorsProps } => {
    const errors: ErrorsProps = {};

    if (!isUsernameValid(username)) {
        errors.username = "The user name must be at least 6 characters long.";
    }

    if (!isEmailValid(email)) {
        errors.email = "Incorrect email.";
    }

    if (!isPasswordValid(password)) {
        errors.password =
            "The password must be at least 8 characters long and contain a number, a lowercase letter, and an uppercase letter. ";
    }

    if (!arePasswordsEqual(password, repeatPassword)) {
        errors.password = "Passwords are not the same. ";
    }

    return {
        isValid:
            isEmailValid(email) &&
            isUsernameValid(username) &&
            isPasswordValid(password) &&
            arePasswordsEqual(password, repeatPassword),
        errors: errors,
    };
};
