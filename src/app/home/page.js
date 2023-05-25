'use client'
import React from "react";
import Link from "next/link";
import styles from './home.module.css'

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div className={styles.home_page}>
      <div className={styles.homepage__hero}>
        <h1 className={styles.homepage__title}>Welcome to our store</h1>
        <p className={styles.homepage__description}>
          Welcome to our online store, where you can find a wide variety of
          products to suit your needs. From stylish clothing to cutting-edge
          electronics, we've got everything you need to make your life easier
          and more enjoyable.<br/><br/>Our mission is to provide you with high-quality
          products at affordable prices, so you can enjoy the best of what the
          world has to offer without breaking the bank. Whether you're shopping
          for yourself or for a loved one, we've got you covered. <br/><br/>We pride
          ourselves on providing excellent customer service, so if you have any
          questions or concerns, don't hesitate to reach out to us. We're always
          here to help, and we want to make sure you have the best possible
          shopping experience with us. <br/><br/>So take a look around our site, and see
          what catches your eye. We're sure you'll find something you love!
        </p>
        <Link href="products" className={styles.homepage__button} onClick={scrollToTop}>
          View Products
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
