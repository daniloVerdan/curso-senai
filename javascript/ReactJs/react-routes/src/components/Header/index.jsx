import { HeaderContainer } from "./styled";

import { useNavigate } from "react-router-dom";


export function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        sessionStorage.removeItem("autenticado");
        navigate("/Login", { replace: true });
    }
    return (
        <HeaderContainer>
            <h1>Tarefas do Danilo</h1>
            <div>
                <button onClick={handleLogout}>Sair</button>
            </div>
        </HeaderContainer>
    )
};