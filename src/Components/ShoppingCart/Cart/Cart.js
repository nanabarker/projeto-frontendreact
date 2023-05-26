import React from "react";
import Items from "../Items/Items";
import { CartStyle } from "./CartStyle";

export default function Cart({ amount, setAmount, cart, setCart }) {
  return (
    <CartStyle>
      <p>Cart</p>
      <Items />
    </CartStyle>
  );
}
