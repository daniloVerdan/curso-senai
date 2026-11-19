import { useEffect, useState } from "react"
import axios from 'axios'
import { MainContainer, RegisterSection, ListSection } from "./styled"


export function Main() {
    const [ cadastro, setCadastro ] = useState([])
    const [editandoId, setEditandoId] = useState(null)
    const [ paginaAtual, setPaginaAtual ] = useState(1)
    const itensPorPagina = 10
    const [ totalPaginas, setTotalPaginas ] = useState(1)
    const [ formData, setFormData ] = useState({
        nome: '',
        categoria: '',
        numero_de_serie: '',
        status: '',
        data_aquisicao: ''
    })

    const fetchCadastro = async () => {
        const response = await axios.get(`http://127.0.0.1:3003/cadastro?pagina=${paginaAtual}&limite=${itensPorPagina}`)
        console.log(response.data)
        console.log(response.data.data)
        setCadastro(response.data.data)
        setTotalPaginas(response.data.pages)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (editandoId) {
        await axios.put(
            `http://127.0.0.1:3003/cadastro/${editandoId}`,
            formData
        )

        alert("Equipamento atualizado!")
    } else {
        console.log('enviado')
        const response = await axios.post('http://127.0.0.1:3003/cadastro', formData)

        alert("Equipamento cadastrado!")
    }

        setFormData({
            nome: '',
            categoria: '',
            numero_de_serie: '',
            status: '',
            data_aquisicao: '' 
        })

        setEditandoId(null)

        fetchCadastro()

        // setCdastro([...cadastro, formData])
        // console.log(response)
    }

    const deletarEquip = async (id) => {
        const response = await axios.delete(`http://127.0.0.1:3003/cadastro/${id}`)

        fetchCadastro()

        alert("Produto excluído!")
    }

    const editarEquip = (equipamento) => {
    setEditandoId(equipamento.id)

    setFormData({
        nome: equipamento.nome,
        categoria: equipamento.categoria,
        numero_de_serie: equipamento.numero_de_serie,
        status: equipamento.status,
        data_aquisicao: equipamento.data_aquisicao
    })
}

    const proximaPagina = () => {
        if (paginaAtual < totalPaginas) {
            setPaginaAtual(paginaAtual + 1)
        }
    }

    const paginaAnterior = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1)
        }
    }

    useEffect(() => {
        fetchCadastro();
    }, [paginaAtual])

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
                        placeholder="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        list="status-options"
                    />

                    <datalist id="status-options">
                        <option value="Disponível" />
                        <option value="Em manutenção" />
                        <option value="Indisponível" />
                    </datalist>
                    

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
                                        <td>
                                            <button onClick={() => editarEquip(equipamento)}>Editar</button>
                                            <button onClick={() => deletarEquip(equipamento.id)}>Excluir</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                <div>
                    <button onClick={paginaAnterior}>Anterior</button>
                    <span>Pagina {paginaAtual} de {totalPaginas}</span>
                    <button onClick={proximaPagina}>Próximo</button>
                </div>

            </ListSection>




        </MainContainer>

    )
};