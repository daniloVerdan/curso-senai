
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
    const autenticado = sessionStorage.getItem("autenticado");

    return autenticado ? <Outlet /> : <Navigate to="/" replace />;
}
