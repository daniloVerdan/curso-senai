import { HeaderContainer } from "./styled";

import { useNavigate } from "react-router-dom";


export function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.setItem("auth", false);
        navigate("/Login", { replace: true });
    }
    function cadastrar() {
        localStorage.setItem("auth", false);
        navigate("/create-user", { replace: true });
    }
    function home() {
        localStorage.setItem("auth", false);
        navigate("/Home", { replace: true });
    }
    return (
        <HeaderContainer>
            <h1>SENAI Book</h1>
            
            <div>
                <button onClick={home}>Home</button>
                <button onClick={cadastrar}>Cadastrar</button>
                <button onClick={handleLogout}>Sair</button>
            </div>
        </HeaderContainer>
    )
};