export default function Items({
  name,
  value,
  quantity,
  image,
  id,
  removeItem,
}) {
  return (
    <>
      {/* <img src= {image} alt=""/> */}
      <p>Nome: {name}</p>
      <p>Valor: R${value.toFixed(2)}</p>
      <p>Quantidade: {quantity}</p>
      <button onClick={() => removeItem(id)}>Remover</button>
    </>
  );
}
