
import { useState } from "react";
import { MainContainer } from "./styled";

export function Main() {
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);
    const [modoEscuro, setModoEscuro] = useState(false);

    function adicionarTarefa(event) {
        event.preventDefault();

        if (tarefa.trim() === "") {
            return;
        }

        setTarefas([
            ...tarefas,
            {
                id: Date.now(),
                texto: tarefa
            }
        ]);

        setTarefa("");
    }

    function removerTarefa(id) {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    }

    return (
        <MainContainer $modoEscuro={modoEscuro}>
            <header>
                <h1>Minhas Tarefas</h1>

                <button
                    type="button"
                    onClick={() => setModoEscuro(!modoEscuro)}
                >
                    {modoEscuro ? "☀️" : "🌙"}
                </button>
            </header>

            <form onSubmit={adicionarTarefa}>
                <input
                    type="text"
                    placeholder="O que você precisa fazer hoje?"
                    value={tarefa}
                    onChange={(event) => setTarefa(event.target.value)}
                />

                <button type="submit">Adicionar</button>
            </form>

            <ol>
                {tarefas.map((item) => (
                    <li key={item.id}>
                        {item.texto}

                        <button
                            type="button"
                            onClick={() => removerTarefa(item.id)}
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ol>
        </MainContainer>
    );
}
