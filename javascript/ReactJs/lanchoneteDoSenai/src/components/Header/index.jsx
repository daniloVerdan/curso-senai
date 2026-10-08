import { HeaderContainer, HeaderText, ListButtonImg, MenuButton } from "./styled";

import List from "../../assets/List.svg";

export function Header() {
    return (
        <HeaderContainer>
            <div/>
            <HeaderText>Lanchonete Do Senai</HeaderText>
            <MenuButton>
                <ListButtonImg src={List} alt="" />
            </MenuButton>
        </HeaderContainer>
    )
}