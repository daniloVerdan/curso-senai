import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    height: 400px;
    width: 250px;

    border-radius: 8px;

    background-color: #B5C2B7;

    box-shadow: 5px 5px 10px gray;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    padding: 20px;
    
    

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 8px;

    gap: 10px;

    h1 {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        width: 150px; 
        border-radius: 8px;
        margin-top: 20px;
        padding: 6px;
        
    }
    h2 {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 6px;
        border-radius: 8px;
        
    }
    button {
        border: none;
        background-color: #45364B;
        color: white;
        border-radius: 8px;
        width: 100px;
        margin-bottom: 20px;

    }
    .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
`