import React from 'react';
import styles from'./contact.module.css'

function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact__title}>Contact Us</h2>
      <form className={styles.contact__form} action='https://formspree.io/f/xknayaoy' method='POST'>
        <div className={styles.form_group}>
          <label className={styles.form_label} htmlFor="name">Name:</label>
          <input className={styles.form_input} type="text" id="name" name="name" required />
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_label} htmlFor="email">Email:</label>
          <input className={styles.form_input} type="email" id="email" name="email" required />
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_label} htmlFor="message">Message:</label>
          <textarea className={styles.form_input} id="message" name="message" required></textarea>
        </div>
        <button type='submit' className={styles.btn}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
