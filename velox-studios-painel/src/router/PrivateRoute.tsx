import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const authStatus = localStorage.getItem("authStatus");

    if (authStatus !== "Authorized user") {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}