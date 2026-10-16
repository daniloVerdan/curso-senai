import { FormContainer, LoginContainer, DadosContainer } from "./styled";
import { useState } from "react";

export function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [profissao, setProfissao] = useState("");
    
    

    function handleSubmit() {
        
    }

    return (
        <FormContainer>
            <LoginContainer>
                <h1>Insira Seus Dados</h1>
                <DadosContainer onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input
                            type="text"
                            placeholder="Digite o seu usuário"
                            required
                        />
                    </div>

                    <div>
                        <label>E-mail:</label>
                        <input
                            type="text"
                            placeholder="Digite a sua senha"
                            required
                        />
                    </div>

                    <div>
                        <label>Endereço:</label>
                        <input
                            type="text"
                            placeholder="Digite o seu usuário"
                            required
                        />
                    </div>

                    <div>
                        <label>Profissão:</label>
                        <input
                            type="text"
                            placeholder="Digite o seu usuário"
                            required
                        />
                    </div>

                    <button type="submit">Entrar</button>
                </DadosContainer >
            </LoginContainer>
        </FormContainer>
    );
}
