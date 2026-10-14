
export function Carrinho({ itens }) {
  const totalItens = itens.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <div>
      <h2>Meu Carrinho</h2>
      <p>Total de itens: {totalItens}</p>

      {itens.map((item) => (
        <div key={item.id}>
          <p>{item.nome}</p>
          <p>Quantidade: {item.quantidade}</p>
          <p>
            Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}