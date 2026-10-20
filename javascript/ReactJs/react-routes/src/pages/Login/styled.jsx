import styled from 'styled-components'

export const LoginContainer = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: #dedede;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-family: arial;

    form {
        height: 200px;
        width: 200px;

        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: #797777;

        gap: 10px;

        input {
            border: none;
            height: 25px;
            
            border-radius: 4px;
            text-align: center;
        }

        button {
            border: none;
            border-radius: 8px;
            height: 30px;
            width: 60px;

            background-color: #01cf01;
            color: white;

            transition: .2s ease;

            cursor: pointer;

            &:hover {
                background-color: green;
            }

        }
    }
`