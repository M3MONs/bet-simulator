import { Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuth } from "src/context/AuthContext";

type ProtectedRouteProps = {
    children: React.JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { accessToken, handleRefreshToken } = useAuth();

    useEffect(() => {
        handleRefreshToken();
    }, [handleRefreshToken]);

    return accessToken ? children : <Navigate to='/' />;
};

export default ProtectedRoute;
