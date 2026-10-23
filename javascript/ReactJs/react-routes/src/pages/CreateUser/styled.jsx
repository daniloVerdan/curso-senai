import styled from "styled-components";

export const CreateUserContainer = styled.div`
    width: 100vw;
    min-height: 100vh;

    background-color: var(--teal-100);

    form {
        width: 100%;
        height: 80vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 16px;

        input {
            width: 250px;
            height: 40px;
            
            padding: 8px;

            border-radius: 8px;

            border: 2px solid var(--teal-700)
        }

        button {
            width: 250px;
            height: 40px;
            
            padding: 8px;

            border-radius: 8px;

            border: 2px solid var(--teal-700);
            background-color: var(--teal-300);
            color: var(--teal-700);
            cursor: pointer;

        }

    }


`

export const CadastroSuccess = styled.div`
    height: 50px;
    width: 200px;

    border-radius: 8px;

    background-color: #72e969;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: #007c04;
    }
`

export const CadastroFail = styled.div`
    height: 50px;
    width: 200px;

    border-radius: 8px;

    background-color: #e96969;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: #7c0000;
        font-size: 16px;
    }
`