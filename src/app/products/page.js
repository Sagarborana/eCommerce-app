'use client'
import React, { useState, useEffect } from 'react';
import SingleProduct from '../components/SingleProduct';
import styles from './products.module.css';
import SearchBar from '../components/SearchBar';
import { useContext } from 'react';
import { CartContext } from '../components/CartContext';

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([])
  
  console.log(useContext(CartContext))
  const fetchProducts = ()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(data => {
      Array.prototype.push.apply(data,products);;
      setFilteredProducts(data)
      setProducts(data)
      setIsLoading(false)
    });
  }
  useEffect(() => {
    fetchProducts();
    }, []);

  const onSearch = (query) => {
    const filteredProducts = products.filter(prod => prod.title.indexOf(query) !== -1)
    setFilteredProducts(filteredProducts)
  }
  
  return (
    <>
    <SearchBar onSearch={onSearch}/>
    <div className={styles.product_list_container}>
      <h2>Products</h2>
      <div className={styles.product_list}>
        {filteredProducts.map(product => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
      <button className={styles.btn} onClick={fetchProducts}>Show more</button>
    </div>
    </>
  );
}

export default Products;
