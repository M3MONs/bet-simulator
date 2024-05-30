import { createContext, useContext, useEffect, useMemo, useState } from "react";
import api from "src/api/api";

interface AuthContextProps {
    accessToken: string | null;
    refreshToken: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
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

    const login = async (username: string, password: string) => {
        try {
            const res = await api.post("auth/token/", { username, password });
            const { access, refresh } = res.data;
            setAccessToken(access);
            setRefreshToken(refresh);
        } catch (error) {
            console.error("Login error:", error);
            throw new Error("Invalid credentials");
        }
    };

    const logout = () => {
        setAccessToken(null);
        setRefreshToken(null);
    };

    const handleRefreshToken = async () => {
        try {
            const res = await api.post("auth/token/refresh/", { refresh: refreshToken });
            const { access } = res.data;
            setAccessToken(access);
        } catch (error) {
            console.error("Refresh token error:", error);
            logout();
        }
    };

    const value = useMemo(
        () => ({ accessToken, refreshToken, login, logout }),
        [accessToken, refreshToken]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
