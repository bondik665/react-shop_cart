import React, { useContext } from "react";
import data from "../../data.js";
import styles from "./Product.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';

const Product = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <h2>Товары</h2>

      <div className={styles.productlist}>
        {data.map((product) => (
          <div key={product.id} className={styles.productcard}>
            <h2>{product.title}</h2>
            <img src={product.img} alt={product.title} />
            <p>{product.desc}</p>
            <p>Категория: {product.category}</p>
            <p>Цена: <span className={styles.price}>${product.price}</span></p>
            <button onClick={() => handleAddToCart(product)}>
              <FontAwesomeIcon icon={faShoppingCart} /> Купить
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;

