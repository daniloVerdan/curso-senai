import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { ButtonsContainer, HomeContainer, UserCard, UserListContainer } from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Home() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    const navigate = useNavigate()


    async function buscarUsuario() {
        const response = await axios.get(
            "https://reqres.in/api/users/2",
            {
                headers: {
                    "x-api-key": import.meta.env.API_KEY
                }
            }
        );

        const data = response.data.data

        console.log(data.email)
    }

    async function buscarUsuarios() {
        const response = await axios.get(
            `https://reqres.in/api/users?page=${page}`,
            {
                headers: {
                    "x-api-key": import.meta.env.API_KEY
                }
            }
        );

        const data = response.data.data

        setUsers(data)
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

    function back() {
        navigate(`/users/${user.id}`)
    }

    if (users.length === 0) {
        return (
            <HomeContainer>
                <Header/>

                <ButtonsContainer>
                    <button onClick={buscarUsuario}>Buscar Usuario</button>
                    <button onClick={buscarUsuarios}>Buscar Usuarios</button>
                </ButtonsContainer>

                <h1>Não tem ninguem aqui! :(</h1>

                <ButtonsContainer>
                    <button onClick={prevPage}>Anterior</button>
                    <button onClick={nextPage}>Próximo</button>
                </ButtonsContainer>
            </HomeContainer>
        )
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
                    <UserCard key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
                        <img src={user.avatar} alt="" />
                        <div>
                            <h2>{user.first_name} {user.last_name} </h2>
                            <p>{user.email}</p>
                        </div>
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
