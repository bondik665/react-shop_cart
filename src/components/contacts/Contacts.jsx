// components/contacts/Contacts.jsx
import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <h2 className={styles.contactsTitle}>Контакты</h2>
      <div className={styles.contactsContent}>
        <div className={styles.contactInfo}>
          <h3>Наши контакты</h3>
          <p>
            Адрес: г. Москва, ул. Пушкина, д. 10
          </p>
          <p>
            Телефон: +7 (123) 456-78-90
          </p>
          <p>
            Email: info@example.com
          </p>
        </div>
        <div className={styles.contactForm}>
          <h3>Напишите нам</h3>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Имя:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Сообщение:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;