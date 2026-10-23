import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header";

import { useNavigate } from "react-router-dom";

import { HomeContainer, UserListContainer, ButtonsContainer, cardContainer } from "./styled"


export function User() {
    const { id } = useParams()

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    async function deleteUser() {
            const response = await axios.delete(
                `https://reqres.in/api/users/${id}`,
                {
                    headers: {
                        'x-api-key': import.meta.env.API_KEY
                    }
                }
            )

            const data = response.data.data

            setUser(data)

        }

    

    useEffect(()=> {
        async function getUser() {
            const response = await axios.get(
                `https://reqres.in/api/users/${id}`,
                {
                    headers: {
                        'x-api-key': import.meta.env.API_KEY
                    }
                }
            )

            const data = response.data.data

            setUser(data)
        }

        getUser()
    }, [id])

    console.log(user)

    function back() {
        navigate("/home");
    }

    function anterior() {
    if (Number(id) > 1) {
        navigate(`/users/${Number(id) - 1}`);
    }
    }

    function proximo() {
    navigate(`/users/${Number(id) + 1}`);
    }
    return (

    <HomeContainer>
        <Header/>
        <UserListContainer>
            {user && (
                
                <div>
                    <button onClick={anterior}>anterior</button>
                    <cardContainer>
                    <img src={user.avatar} alt={`Foto de ${user.first_name}`} />
                    <h2>{user.first_name} {user.last_name}</h2>
                    <p>{user.email}</p>
                    </cardContainer>
                    <button onClick={proximo}>proximo</button>
                </div>
            )}
        </UserListContainer>
        <ButtonsContainer>
            <button onClick={back}>Voltar</button>
            <button onClick={deleteUser}>Deletar</button>
        </ButtonsContainer>
    </HomeContainer>
)
};