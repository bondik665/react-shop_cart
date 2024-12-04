// components/cart/CartModal.jsx
import React, { useContext } from 'react';
import styles from './CartModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';

function CartModal() {
  const { isCartOpen, setIsCartOpen, cartItems, changeQuantity, removeFromCart, totalPrice } = useContext(CartContext);

  if (!isCartOpen) return null;

  return (
    <dialog open={isCartOpen} className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Корзина</h2>
        <div className={styles.cart}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <h3>{item.title}</h3>
              <p>Цена: ${item.price}</p>
              <p>Количество: {item.quantity}</p>
              
              <button onClick={() => changeQuantity(item.id, 1)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity === 1}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button onClick={() => removeFromCart(item.id)}>
                <FontAwesomeIcon icon={faTrash} /> Удалить
              </button>
            </div>
          ))}
          <p>Общая сумма: ${totalPrice.toFixed(2)}</p>
        </div>
        <button onClick={() => setIsCartOpen(false)}>Закрыть</button>
      </div>
    </dialog>
  );
}

export default CartModal;

// import React from 'react';
// import styles from './CartModal.module.css';

// function CartModal({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <dialog open={isOpen} className={styles.modal}>
//       <div className={styles.modalContent}>
//         <h2>Корзина</h2>
//         <p>Здесь будет список товаров в корзине.</p>
//         <button onClick={onClose}>Закрыть</button>
//       </div>
//     </dialog>
//   );
// }

// export default CartModal;