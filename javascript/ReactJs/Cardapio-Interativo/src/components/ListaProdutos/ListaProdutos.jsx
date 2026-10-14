export function ListaProdutos({ produtos, adicionarAoCarrinho }) {
  return (
    <section>
      <h2>Nosso Cardápio</h2>

      <div>
        {produtos.map((produto) => (
          <article key={produto.id}>
            <h3>{produto.nome}</h3>
            <p>
              R$ {produto.preco.toFixed(2)}
            </p>

            <p>Categoria: {produto.categoria}</p>

            <button onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao Carrinho
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}