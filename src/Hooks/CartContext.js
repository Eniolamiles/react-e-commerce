import React, { createContext, useState, useEffect } from "react";
const CartContext = createContext();

const cartItemFromLocalStorage =
  JSON.parse(localStorage.getItem("cartItem")) || [];

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(cartItemFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);
  let handleAddToCart = (product) => {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem.id === product.id
    );
    if (productSelected) {
      setCartItem(
        cartItem.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, handleAddToCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
