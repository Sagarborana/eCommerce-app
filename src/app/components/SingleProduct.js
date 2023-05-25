'use client'
import Link from 'next/link';
import './SingleProduct.css';
import { useContext } from 'react';
import { CartContext, CartProvider } from './CartContext';


function SingleProduct(props) {
    const { id, title, image, price } = props.product;
    const {addToCart,cartItems, removeFromCart} = useContext(CartContext);
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
  
    const itemIndex = cartItems.findIndex(item => item.id === id);
    const isProductInCart = itemIndex !== -1;
  
    return (
      <div className="product-tile">
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <div className="product-info">
          <h3 className="product-name">
            <Link href={`/products/${id}`} onClick={scrollToTop}>{title}</Link>
          </h3>
          <p className="product-price">${price}</p>
          {isProductInCart ? (
          <div className='cart-button'>
          <button className='my-button' onClick={()=> removeFromCart(id)}>Remove to Cart</button>
          </div>
        ) : (
          <div className='cart-button'>
          <button className='my-button' onClick={()=> addToCart(props.product)}>Add to Cart</button>
          </div>
        )}
          </div>
      </div>
    );
  }

export default SingleProduct;
