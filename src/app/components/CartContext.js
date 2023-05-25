'use client'
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    item.quantity = 1;
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id != id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(prevItems => {
      const index = prevItems.findIndex(item => item.id === itemId);
      if (index === -1) return prevItems; // item not found
      const newItems = [...prevItems];
      if(newQuantity > 0) newItems[index] = {...newItems[index], quantity: newQuantity};
      return newItems;
    });
  };  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, setCartItems, handleQuantityChange }}>
      {children}
    </CartContext.Provider>
  );
};
