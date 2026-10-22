import styled from "styled-components"


export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: var(--teal-100);

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const cardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const UserListContainer = styled.div`
    padding: 32px;
    
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        gap: 30px;

        button {
            height: 32px;
            width: 100px;

            background-color: var(--teal-300);
            border: none;
            border-radius: 8px;
            color: var(--teal-700);
        cursor: pointer;
        }
    }

`

export const ButtonsContainer = styled.div`
    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;


    button {
        height: 32px;
        width: 200px;

        background-color: var(--teal-300);
        border: none;
        border-radius: 8px;
        color: var(--teal-700);
        cursor: pointer;
    }
`
