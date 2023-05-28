import React, { useState, useEffect } from "react";
import "./App.css";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import GlobalStyled from "./GlobalStyled";
import { AppStyle } from "./AppStyled";
import { productList } from "./assents/productsList";

function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredList, setFilteredList] = useState([...productList]);
  const [sortedList, setSortedList] = useState([...productList]);

  useEffect(() => {
    setFilteredList(
      sortedList
        .filter((product) => {
          return minFilter ? product.value >= minFilter : product;
        })
        .filter((product) => {
          return maxFilter ? product.value <= maxFilter : product;
        })
        .filter((product) => {
          return searchFilter
            ? product.name.toLowerCase().includes(searchFilter.toLowerCase())
            : product;
        })
    );
  }, [minFilter, maxFilter, searchFilter]);
  console.log(filteredList);
  return (
    <AppStyle>
      <GlobalStyled />
      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Home
        sortedList={sortedList}
        setSortedList={setSortedList}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />

      <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />
    </AppStyle>
  );
}
export default App;
