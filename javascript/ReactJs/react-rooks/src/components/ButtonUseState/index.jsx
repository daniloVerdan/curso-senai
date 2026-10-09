import { useState } from 'react';

export function ButtonUseState() {
    const [contador, setContador] = useState(0)
    const [isDark, setIsDark] = useState(false)

    function aumentar() {
    setContador(contador + 1);
    }

    function diminuir() {
        setContador(contador - 1);
    }

    function resetar() {
        setContador(0);
    }

    function positivoNegativo() {
        if (contador < 0) {
            return 'negativo'
        } else if (contador > 0) {
            return 'positivo'
        }
    }    

    function parOuImpar() {
        if (contador % 2 === 0) {
            return 'par'
        } else  {
            return 'impar'
        }

    }

    function toggleTheme() {
        setIsDark(!isDark);
    }

    return (
        <div style={isDark ? {backgroundColor: "black", color: "white"} : {backgroundColor: "yellow", color: "black"}}>
            <h1>Contagem: {contador}</h1>
            <h1>O número é: {positivoNegativo()}</h1>
            <h1>par ou impar: {parOuImpar()}</h1>
            <button onClick={aumentar}>Adicionar</button>
            <button onClick={diminuir}>retirar</button>
            <button onClick={resetar}>Resetar</button>
            <button onClick={toggleTheme}>Mudar Tema</button>
        </div>
    )

};