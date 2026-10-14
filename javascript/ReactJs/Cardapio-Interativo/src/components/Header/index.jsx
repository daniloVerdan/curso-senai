import { HeaderContainer, ShoppingCartIconContainer } from "./styled.jsx";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react";

export function Header({ totalItens }) {
    return (
        <HeaderContainer>
            <ShoppingCartIconContainer>
                <ShoppingCartSimpleIcon size={60} color="#dbd8df" />
                <h1></h1>
                <span> ({totalItens})</span>
            </ShoppingCartIconContainer>
        </HeaderContainer>
        
    )
};