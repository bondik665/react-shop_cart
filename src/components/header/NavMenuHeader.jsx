// components/header/NavMenuHeader.jsx
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartModal from "../cartmodal/CartModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavMenuHeader.module.css";
import { Link } from "react-router-dom";

const NavMenuHeader = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <div>
      <ul className={styles.ulnav}>
        <li onClick={() => setIsCartOpen(!isCartOpen)}>
          <span>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#fff" }} />
          </span>
        </li>

        <li>
          <Link to="/Catalog">Каталог</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>

      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavMenuHeader;
