import { ErrorContainer, ImageContainer } from "./styled"
import { useNavigate } from "react-router-dom";

export function Error() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/home')
    }
    return (
        <ErrorContainer>
            <div>
            <h1>Erroooouuu 🤖</h1>
            <p><strong>404.</strong> not found.</p>
            <p>cê digitou esse trem errado.</p>
            <p>Tem nada aqui não doido!</p>
            </div>
            <ImageContainer src="/404.png"/>
            <button onClick={handleClick}>Voltar para Home</button>
        </ErrorContainer>

        
    )
};