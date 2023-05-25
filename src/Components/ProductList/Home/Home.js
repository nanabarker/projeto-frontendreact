import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { CardBox, HomeStyle, InfoBox } from "./HomeStyle";

export default function Home({ productList }) {
  const [ordination, setOrdination] = useState("");

  function ordinationSelect(event) {
    setOrdination(event.target.value);
  }
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
        <ProductCard productList={productList[0]} />
        <ProductCard productList={productList[1]} />
        <ProductCard productList={productList[2]} />
      </CardBox>
    </HomeStyle>
  );
}
