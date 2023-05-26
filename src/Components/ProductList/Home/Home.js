import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { CardBox, HomeStyle, InfoBox } from "./HomeStyle";

export default function Home({
  productList,
  amount,
  setAmount,
  cart,
  setCart,
}) {
  const [ordination, setOrdination] = useState("");

  function ordinationSelect(event) {
    setOrdination(event.target.value);
  }

  // const renderAllCards = productList.map((product) => {
  //   console.log(product);
  //   return <ProductCard productList={product} />;
  // });

  function addToCart(product) {
    // console.log(product);
    const addNewProduct = cart.find(
      (produtoCallBack) => product.id === produtoCallBack.id
    );
    if (addNewProduct === undefined) {
      product = { ...product, quantity: 1 };
      setCart([...cart, product]);

      const totalValue = amount + product.value;
      setAmount(totalValue);
    } else {
      const newCart = cart.map((product) => {
        if (product.id === addNewProduct.id) {
          const totalValue = amount + product.value;
          setAmount(totalValue);

          return { ...addNewProduct, quantity: addNewProduct.quantity + 1 };
        } else {
          return product;
        }
      });
      setCart(newCart);

      // console.log("Product not found");
    }
  }
  console.log("Valor Total:", amount);
  // console.log(cart, "Carrinho de Compras");
  return (
    <HomeStyle>
      <InfoBox>
        <span>Quantidade de Produtos: {productList.length}</span>
        <span>
          Ordenação:
          <select value={ordination} onChange={ordinationSelect}>
            <option></option>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </span>
      </InfoBox>
      <CardBox>
        {/* {renderAllCards} */}
        {/* Chamada de componente uando o MAP */}

        {productList.map((product) => {
          return (
            <ProductCard
              productList={product}
              key={product.id}
              addProductToCart={addToCart}
            />
          );
        })}
        {/* O uso não é mais necessário porque chamei no MAP */}
        {/* <ProductCard productList={productList[0]} />
        <ProductCard productList={productList[1]} />
        <ProductCard productList={productList[2]} /> */}
      </CardBox>
    </HomeStyle>
  );
}
