import React from 'react';
import styles from './about.module.css'

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_text}>
        <h1>About Us</h1>
        <p>We are a company that sells a wide range of products to our customers.</p>
        <p>Our mission is to provide high-quality products at affordable prices, and to make the shopping experience as easy and enjoyable as possible.</p>
      </div>
    </div>
  );
}

export default About;