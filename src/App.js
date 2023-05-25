import React, { useState } from "react";
import "./App.css";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import GlobalStyled from "./GlobalStyled";
import { AppStyle } from "./AppStyled";
import { productList } from "./assents/productsList";

function App() {
  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

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
