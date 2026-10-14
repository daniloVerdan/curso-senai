import { ListaProdutos } from "./components/ListaProdutos/ListaProdutos.jsx";
import { Carrinho } from "./components/Carrinho/Carrinho.jsx";
import { PRODUTOS } from "./produtos.jsx";
import { Header } from "./components/Header/index.jsx";
import { useState } from 'react';
import './App.css'

export function App() {
  const [carrinho, setCarrinho] = useState([]);

  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);

  function adicionarAoCarrinho(produto) {
    setcarrinho((carrinhoAtual) => {
      const produtoExistente = carrinhoAtual.find((item) => item.id === produto.id);

      if (produtoExistente) {
        return carrinhoAtual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } 
        return [...carrinhoAtual, { ...produto, quantidade: 1 }];
      });
  }
  
  return (
    <>
      <Header totalItens={totalItens} />
      <ListaProdutos
        produtos={PRODUTOS}
        adicionarAoCarrinho={adicionarAoCarrinho}
      />
      <Carrinho itens={carrinho} />
    </>
    
  )
}

