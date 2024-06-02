import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import api from "src/api/api";

interface AuthContextProps {
    accessToken: string | null;
    refreshToken: string | null;
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, password: string, email: string) => Promise<void>;
    logout: () => void;
    handleRefreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

const getStoredToken = (key: string) => localStorage.getItem(key);
const storeToken = (key: string, token: string | null) => {
    if (token) {
        localStorage.setItem(key, token);
    } else {
        localStorage.removeItem(key);
    }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(getStoredToken("accessToken"));
    const [refreshToken, setRefreshToken] = useState<string | null>(getStoredToken("refreshToken"));

    useEffect(() => {
        storeToken("accessToken", accessToken);
        storeToken("refreshToken", refreshToken);
    }, [accessToken, refreshToken]);

    const register = async (username: string, password: string, email: string) => {
        try {
            const userData = { username, password, email };
            await api.post("auth/user/register/", userData);
        } catch (error: any) {
            if (error.response) {
                console.error("Register error:", error.response.data);
                throw new Error(error.response.data.username || error.response.data.email);
            } else if (error.request) {
                console.error("No response from server:", error.request);
                throw new Error("No response from server");
            } else {
                console.error("Error:", error.message);
                throw new Error(error.message || "Register error occurred. Try again later.");
            }
        }
    };

    const login = async (username: string, password: string) => {
        try {
            const res = await api.post("auth/token/", { username, password });
            const { access, refresh } = res.data;
            setAccessToken(access);
            setRefreshToken(refresh);
        } catch (error: any) {
            console.error("Login error:", error.message);
            throw new Error("Invalid credentials");
        }
    };

    const logout = () => {
        setAccessToken(null);
        setRefreshToken(null);
    };

    const handleRefreshToken = useCallback(async () => {
        if (!refreshToken) {
            logout();
            return;
        }

        try {
            const res = await api.post("auth/token/refresh/", { refresh: refreshToken });
            const { access } = res.data;
            setAccessToken(access);
        } catch (error) {
            console.error("Refresh token error:", error);
            logout();
            throw new Error("Refresh token error");
        }
    }, [refreshToken]);

    const value = useMemo(
        () => ({ accessToken, refreshToken, login, logout, register, handleRefreshToken }),
        [accessToken, refreshToken, handleRefreshToken]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
