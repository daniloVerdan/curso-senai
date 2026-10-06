import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Button } from "./components/Button/Button";

function App() {
    return (
        <>
            <Header title="Vamo embora que vai cair GRANITO!!!"/>
            <Main title="extra! extra!" subtitle="Quero ir embora por causa da chuva" content="quero ir emboraaaaa!!!!!"/>
            <Footer />
            
        </>
    );
}

export default App;