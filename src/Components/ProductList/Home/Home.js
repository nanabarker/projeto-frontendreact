import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { CardBox, HomeStyle, InfoBox } from "./HomeStyle";

export default function Home({
  sortedList,
  setSortedList,
  filteredList,
  setFilteredList,
  amount,
  setAmount,
  cart,
  setCart,
}) {
  const [ordination, setOrdination] = useState("");

  function ordinationSelect(event) {
    setOrdination(event.target.value);
  }

  // const renderAllCards = filteredList.map((product) => {
  //   console.log(product);
  //   return <ProductCard filteredList={product} />;
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

  useEffect(() => {
    filteredList.sort((firstValue, secondValue) => {
      if (ordination === "Crescente") {
        if (firstValue.value < secondValue.value) {
          return -1;
        }
        if (firstValue.value > secondValue.value) {
          return 1;
        }
      }
      if (ordination === "Decrescente") {
        if (firstValue.value > secondValue.value) {
          return -1;
        }
        if (firstValue.value < secondValue.value) {
          return 1;
        }
      }

      if (ordination === "A-Z") {
        if (firstValue.name < secondValue.name) {
          return -1;
        }
        if (firstValue.name > secondValue.name) {
          return 1;
        }
      }
      if (ordination === "Z-A") {
        if (firstValue.name > secondValue.name) {
          return -1;
        }
        if (firstValue.name < secondValue.name) {
          return 1;
        }
      }
    });
    sortedList.sort((firstValue, secondValue) => {
      if (ordination === "Crescente") {
        if (firstValue.value < secondValue.value) {
          return -1;
        }
        if (firstValue.value > secondValue.value) {
          return 1;
        }
      }
      if (ordination === "Decrescente") {
        if (firstValue.value > secondValue.value) {
          return -1;
        }
        if (firstValue.value < secondValue.value) {
          return 1;
        }
      }

      if (ordination === "A-Z") {
        if (firstValue.name < secondValue.name) {
          return -1;
        }
        if (firstValue.name > secondValue.name) {
          return 1;
        }
      }
      if (ordination === "Z-A") {
        if (firstValue.name > secondValue.name) {
          return -1;
        }
        if (firstValue.name < secondValue.name) {
          return 1;
        }
      }
    });
    setFilteredList([...filteredList]);
    setSortedList([...sortedList]);
  }, [ordination]);

  return (
    <HomeStyle>
      <InfoBox>
        <span>Quantidade de Produtos: {filteredList.length}</span>
        <span>
          Ordenação:
          <select value={ordination} onChange={ordinationSelect}>
            <option></option>
            <option>A-Z</option>
            <option>Z-A</option>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </span>
      </InfoBox>
      <CardBox>
        {/* {renderAllCards} */}
        {/* Chamada de componente uando o MAP */}

        {filteredList.map((product) => {
          return (
            <ProductCard
              productList={product}
              key={product.id}
              addProductToCart={addToCart}
            />
          );
        })}
        {/* O uso não é mais necessário porque chamei no MAP */}
        {/* <ProductCard filteredList={filteredList[0]} />
        <ProductCard filteredList={filteredList[1]} />
        <ProductCard filteredList={filteredList[2]} /> */}
      </CardBox>
    </HomeStyle>
  );
}
