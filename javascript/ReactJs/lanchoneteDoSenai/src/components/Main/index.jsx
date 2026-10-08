import { MainContainer, MealCard } from "./styled";

export function Main() {
    return (
        <MainContainer>
            <MealCard style={{backgroundImage: "url(../../public/OIP.webp)", backgroundSize: "cover"}}>
                <h2>Filé Miau</h2>
                <p>R$ 49,90</p>
            </MealCard>
            <MealCard style={{backgroundImage: "url(../../public/chorizo.webp)", backgroundSize: "cover"}}>
                <h2>Macarrão de Chorizo</h2>
                <p>R$ 29,90</p>
            </MealCard>
            <MealCard style={{backgroundImage: "url(../../public/salmao.webp)", backgroundSize: "cover"}}>
                <h2>Filé de Salmão Albino</h2>
                <p>R$ 89,90</p>
            </MealCard>

            <MealCard style={{backgroundImage: "url(../../public/OIP.webp)", backgroundSize: "cover"}}>
                <h2>Filé Miau</h2>
                <p>R$ 49,90</p>
            </MealCard>
            <MealCard style={{backgroundImage: "url(../../public/chorizo.webp)", backgroundSize: "cover"}}>
                <h2>Macarrão de Chorizo</h2>
                <p>R$ 29,90</p>
            </MealCard>
            <MealCard style={{backgroundImage: "url(../../public/salmao.webp)", backgroundSize: "cover"}}>
                <h2>Filé de Salmão Albino</h2>
                <p>R$ 89,90</p>
            </MealCard>

            <MealCard style={{backgroundImage: "url(../../public/OIP.webp)", backgroundSize: "cover"}}>
                <h2>Filé Miau</h2>
                <p>R$ 49,90</p>
            </MealCard>
            <MealCard style={{backgroundImage: "url(../../public/chorizo.webp)", backgroundSize: "cover"}}>
                <h2>Macarrão de Chorizo</h2>
                <p>R$ 29,90</p>
            </MealCard>
            <MealCard style={{backgroundImage: "url(../../public/salmao.webp)", backgroundSize: "cover"}}>
                <h2>Filé de Salmão Albino</h2>
                <p>R$ 89,90</p>
            </MealCard>
        </MainContainer>
    )
}