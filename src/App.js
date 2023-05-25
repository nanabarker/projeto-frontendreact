import React from "react";
import "./App.css";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import GlobalStyled from "./GlobalStyled";
import { AppStyle } from "./AppStyled";
import { productList } from "./assents/productsList";

function App() {
  console.log(productList);
  return (
    <AppStyle>
      <GlobalStyled />
      <Filters />
      <Home productList={productList} />
      <Cart />
    </AppStyle>
  );
}
export default App;
