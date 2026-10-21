import { HeaderContainer } from "./styled";

import { useNavigate } from "react-router-dom";


export function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.setItem("auth", false);
        navigate("/Login", { replace: true });
    }
    return (
        <HeaderContainer>
            <h1>SENAI Book</h1>
            <div>
                <button onClick={handleLogout}>Sair</button>
            </div>
        </HeaderContainer>
    )
};