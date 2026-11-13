import { useEffect, useState } from "react"
import axios from 'axios'
import { MainContainer } from "./styled"


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
        </MainContainer>






    )
};