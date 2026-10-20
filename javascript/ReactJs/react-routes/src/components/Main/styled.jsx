
import styled from "styled-components";

export const MainContainer = styled.main`
    min-height: 100vh;
    box-sizing: border-box;
    padding: 30px;

    background-color: ${({ $modoEscuro }) =>
        $modoEscuro ? "#222" : "#f5f5f5"};

    color: ${({ $modoEscuro }) =>
        $modoEscuro ? "#fff" : "#222"};

    transition: background-color 0.3s, color 0.3s;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
    }

    form {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    input {
        flex: 1;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
    }

    button {
        padding: 10px 15px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }

    ol {
        padding-left: 25px;
    }

    li {
        margin-bottom: 12px;
    }

    li button {
        margin-left: 12px;
    }
`;
