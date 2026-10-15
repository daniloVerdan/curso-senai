import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { MainContainer } from "./styled";
import { useCart } from "../CartContext/CartContext";

export function Main() {
    const [productList, setProductList] = useState([])
    const [loading, setLoaidng] = useState(true)
    const { cartCount } = useCart()

    console.log(cartCount)

    useEffect(() => {
        async function fetchProducts() {
            try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProductList(data)
            } catch (error) {
                console.log('erro ao buscar os produtos', error)
            } finally {
                setLoading(false)
            }

        }
        
        fetchProducts()
    }, [])
    
    return (
        <MainContainer>
            {productList.map((product) => (
                <ProductCard
                key={product.id}
                nome={product.title}
                preco={product.price}
                categoria={product.category}
                style={{
                    backgroundImage: `url("${product.image}")`,
                    backgroundSize: "50%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                />
            ))
            }
            </MainContainer>
    )
};