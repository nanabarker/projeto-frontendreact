import React from "react";
import Items from "../Items/Items";
import { CartStyle } from "./CartStyle";

function Cart() {
return (
    <CartStyle>
    <p>Cart</p>
    <Items/>
    </CartStyle>
);
}

export default Cart;