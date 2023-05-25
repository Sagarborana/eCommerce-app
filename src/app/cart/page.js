"use client"
import React, { useContext, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from '../components/CartContext';
import styles from "./cart.module.css";

function Cart() {
  const { cartItems, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className={styles.cart_container}>
      <h2 className={styles.cart_title}>Cart</h2>
      <div className={styles.cart_items_container}>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className={styles.cart_total}>
          <p className={styles.cart_total_text}>Total: ${totalPrice.toFixed(2)}</p>
          <button className={styles.cart_clear_button} onClick={()=> clearCart()}>Clear Cart</button>
        </div>
      )}
      {cartItems.length === 0 && (
        <div className={styles.cart_empty}>
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
