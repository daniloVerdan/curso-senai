import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
    const isAutenticated = localStorage.getItem("auth") === 'true';

    return isAutenticated ? <Outlet /> : <Navigate to="/Login" replace />;
}
