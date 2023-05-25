"use client"
import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import './CartItem.css';
import { CartContext } from './CartContext';

function CartItem({ item }) {
  const { removeFromCart, setCartItems, handleQuantityChange } = useContext(CartContext);

  return (
    <div className="cart_item">
      <img className="cart_item__image" src={item.image} alt={item.title} />
      <div className="cart_item__details">
        <p className="cart_item__title">{item.title}</p> 
        <p className="cart_item__price">Price: ${item.price}</p>
        <p className="cart_item__quantity">Quantity: {item.quantity}</p>
        <div className='cart_buttons'>
        <button className="my-button" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
        <button className='cart_item__remove' onClick={() => removeFromCart(item.id)}>
          <FaTrash />
        </button>
        <button className="my-button" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
