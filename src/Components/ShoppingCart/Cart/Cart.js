import React from "react";
import Items from "../Items/Items";
import { CartStyle } from "./CartStyle";

export default function Cart({ amount, setAmount, cart, setCart }) {
  function removeItem(id) {
    cart.map((product) => {
      if (product.id === id && product.quantity >= 1) {
        console.log("REMOVER ITEM");
        product.quantity = product.quantity - 1;
        setCart([...cart]);
        setAmount(amount - product.value);
      }
      if (product.quantity === 0) {
        const newCart = cart.filter((products) => products.quantity !== 0);
        setCart(newCart);
      }
    });
  }
  return (
    <CartStyle>
      <h2>Carrinho</h2>
      {cart.map((product) => {
        return (
          <Items
            key={product.id}
            name={product.name}
            value={product.value * product.quantity}
            quantity={product.quantity}
            image={product.imageUrl}
            id={product.id}
            removeItem={removeItem}
          />
        );
      })}
      <p>Valor Total: R${amount.toFixed(2)}</p>
    </CartStyle>
  );
}
