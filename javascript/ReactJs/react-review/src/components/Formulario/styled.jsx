import styled from 'styled-components'

export const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;

    //background-color: #66C7F4;
    background-image: url("/windows.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    font-family: Arial, Helvetica, sans-serif;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const LoginContainer = styled.div`
    height: 450px;
    width: 400px;

    border-radius: 16px;
    box-shadow: 4px 4px 10px #232424;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`
export const DadosContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        input {
            height: 20px;

            padding: 16px 8px;

            border: none;
            border-radius: 4px;
            outline: none;
            background-color: #C1CAD6;
        }

        label {
            font-size: 20px;
        }
        
    }

    button {
        height: 40px;
        width: 100%;

        border: none;
        border-radius: 8px;

        background-color: #8082be;

        color: white;
        font-size: 20px;

        cursor: pointer;
        transition: .1s ease-out;

        &:hover {
            background-color: #8082be;
        }

    }



`