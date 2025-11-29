import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    return isLoading ? null : isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to={"/"} replace />
    );
};

export default ProtectedRoutes;
