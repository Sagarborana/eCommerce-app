'use client'
import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_section}>
        <h3 className={styles.footer_heading}>About Us</h3>
        <p className={styles.footer_text}>We are a passionate team of individuals dedicated to providing the best products and services to our customers. <br/>Our mission is to make shopping online an enjoyable and seamless experience for everyone. We believe in quality, affordability, and excellent customer service. Thank you for choosing us as your go-to online store. We appreciate your business and look forward to serving you in the future.</p>
      </div>
      <div className={styles.footer_flex}>
      <div className={`${styles.footer_item} ${styles.footer_section}`}>
        <h3 className={styles.footer_heading}>Links</h3>
        <ul className={styles.footer_list}>
          <li><Link href={"b"} onClick={()=>window.scrollTo(0,0)} to="/">Home</Link></li>
          <li><Link href={"b"} onClick={()=>window.scrollTo(0,0)} to="/products">Products</Link></li>
          <li><Link href={"b"} onClick={()=>window.scrollTo(0,0)} to="/cart">Cart</Link></li>
          <li><Link href={"b"} onClick={()=>window.scrollTo(0,0)} to="/contact">Contact</Link></li>
          <li><Link href={"b"} onClick={()=>window.scrollTo(0,0)} to="/about">About</Link></li>
        </ul>
      </div>
      <div className={`${styles.footer_item} ${styles.footer_section}`}>
        <h3 className={styles.footer_heading}>Contact Us</h3>
        <p className={styles.footer_text}>Baner Road, Pune, Maharashtra- 411045</p>
        <p className={styles.footer_text}>Email: info@example.com</p>
        <p className={styles.footer_text}>Phone: +91 1234567890</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;