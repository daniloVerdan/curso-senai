import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    
    gap: 30px;

    button {
        height: 25px;
        width: 130px;

        cursor: pointer;

        border: none;
        border-radius: 6px;
        background-color: #f5d444;

        transition: .2s ease;

        &:hover {
            background-color: #c4a932
        }
    }
    div {
        height: 100vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;

        flex-direction: column;
        

    h1 {
        color: red;
    }

    
}


`
export const ImageContainer = styled.img`
    height: 200px

`