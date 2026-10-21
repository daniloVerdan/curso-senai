
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { ButtonsContainer, HomeContainer, UserCard, UserListContainer } from "./styled";
import axios from "axios";

export function Home() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);


    async function buscarUsuario() {
        const response = await axios.get(
            "https://reqres.in/api/users/2",
            {
                headers: {
                    "x-api-key": import.meta.env.VITE_API_KEY
                }
            }
        );

        setUsers([response.data.data]);
    }

    async function buscarUsuarios() {
        const response = await axios.get(
            `https://reqres.in/api/users?page=${page}`,
            {
                headers: {
                    "x-api-key": import.meta.env.VITE_API_KEY
                }
            }
        );

        setUsers(response.data.data);
    }

    useEffect(() => {
        buscarUsuarios();
    }, [page]);

    function nextPage() {
        setPage(page + 1);
    }

    function prevPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return (
        <HomeContainer>
            <Header />
            <ButtonsContainer>
            <button onClick={buscarUsuario}>Buscar usuário</button>
            <button onClick={buscarUsuarios}>Buscar usuários</button>
            </ButtonsContainer>
            <UserListContainer>
            {users.map((user) => (
                <UserCard key={user.id}>
                    <img src={user.avatar} alt={`Foto de ${user.first_name}`} />
                    <h2>{user.first_name} {user.last_name}</h2>
                    <p>{user.email}</p>
                </UserCard>
            ))}
            </UserListContainer>
            <ButtonsContainer>
                <button onClick={prevPage}>Anterior</button>
                <button onClick={nextPage}>Proximo</button>
            </ButtonsContainer>

        </HomeContainer>
    );
}
