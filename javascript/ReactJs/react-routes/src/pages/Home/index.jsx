import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { HomeContainer } from "./styled";


import { useNavigate } from "react-router-dom";

export function Home() {
    

    return (
        <HomeContainer>
            <Header/>
            
            <Main/>
            
        </HomeContainer>
        
    );
}


