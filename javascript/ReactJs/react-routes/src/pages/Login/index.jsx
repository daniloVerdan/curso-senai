
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./styled";

export function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        if (usuario === "Danilo" && senha === "1234") {
            navigate("/home");
        } else {
            setMensagem("Usuário ou senha incorretos!");
        }
    }

    return (
        <LoginContainer>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Usuário"
                    value={usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    required
                />

                <button type="submit">Entrar</button>
            </form>

            <p>{mensagem}</p>
        </LoginContainer>
    );
}
