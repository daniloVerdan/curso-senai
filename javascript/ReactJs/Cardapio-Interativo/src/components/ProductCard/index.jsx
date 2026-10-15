import { useCart } from '../CartContext/CartContext'
import { ProductCardContainer } from './styled'

export function ProductCard({ nome, preco, categoria, style}) {
    const { increment } = useCart()

    return (
        <ProductCardContainer style={style}>
            <h1>{nome}</h1>
            <div className="product-info">
                <h2>${preco}</h2>
                <h2>{categoria}</h2>
                <button onClick={increment}>Adicionar ao Carrinho 🛒</button>
            </div>
        </ProductCardContainer>
    )
};