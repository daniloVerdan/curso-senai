import { useEffect, useState } from "react"
import axios from 'axios'
import { MainContainer, RegisterSection, ListSection } from "./styled"


export function Main() {
    const [ cadastro, setCadastro ] = useState([])
    const [ formData, setFormData ] = useState({
        nome: '',
        categoria: '',
        numero_de_serie: '',
        status: '',
        data_aquisicao: ''
    })

    const fetchCadastro = async () => {
        const response = await axios.get('http://127.0.0.1:3003/cadastro')
        setCadastro(response.data)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('enviado')
        const response = await axios.post('http://127.0.0.1:3003/cadastro', formData)

        setCdastro([...cadastro, formData])
        console.log(response)
    }

    useEffect(() => {
        fetchCadastro();
    }, [cadastro])

    return (
        <MainContainer>
            <h1>TechStock - Sistema de Controle de Inventário</h1>

            <RegisterSection>
                <h2>Cadastro de Equipamentos</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Nome do Equipamento"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange} 
                    />

                    <input 
                        type="text"
                        placeholder="Categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleInputChange} 
                    />

                    <input 
                        type="text"
                        placeholder="Numero de Série"
                        name="numero_de_serie"
                        value={formData.numero_de_serie}
                        onChange={handleInputChange} 
                    />

                    <input 
                        type="text"
                        placeholder="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange} 
                    />

                    <input 
                        type="date"
                        placeholder="Data de Aquisição"
                        name="data_aquisicao"
                        value={formData.data_aquisicao}
                        onChange={handleInputChange} 
                    />
                    <button type="submit">Cadastrar</button>
                    
                </form>

            </RegisterSection>

            <ListSection>
                <h2>Equipamentos</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do equipamento</th>
                                <th>Categoria</th>
                                <th>Numero de Série</th>
                                <th>Status</th>
                                <th>Data de Aquisição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cadastro.map((equipamento) =>(
                                    <tr key={equipamento.id}>         
                                        <td id='itens'>{equipamento.nome}</td>
                                        <td id='itens'>{equipamento.categoria}</td>
                                        <td id='itens'>{equipamento.numero_de_serie}</td>
                                        <td id='itens'>{equipamento.status}</td>
                                        <td id='itens'>{equipamento.data_aquisicao}</td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>


            </ListSection>




        </MainContainer>

    )
};