import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #dedede;
    border: 1px solid black;

    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
        background-color: #8f8e8e;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 34px;
        width: 890px;
        border: 1px solid black;

        padding: 20px;
        margin-top: 20px;
    }
    
    input {
    border: 1px solid black;
    width: 140px;
    }
`

export const RegisterSection = styled.div`
    background-color: #5e5c5c;
    font-family: "Montserrat", sans-serif;
    padding: 20px;
    width: 890px;
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    button {
    border: 1px solid black;
    }
`

export const ListSection = styled.div`
    background-color: #8f8e8e;
    font-family: "Montserrat", sans-serif;
    padding: 20px;
    width: 890px;
    border: 1px solid black;
    

    display: flex;
    flex-direction: column;
    justify-content: flex-center;
    align-items: flex-start;
    gap: 8px;

    #itens {
    background-color: white;
    }

    button {
    border: 1px solid black;
    }
    
`