import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { CardBox, HomeStyle, InfoBox } from "./HomeStyle";

export default function Home({ productList }) {
  return (
    <HomeStyle>
      <InfoBox>
        <span>Quantidade de Produtos: {productList.length}</span>
        <span>
          Ordenação:{" "}
          <select>
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
