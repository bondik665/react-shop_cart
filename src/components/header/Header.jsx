import React from 'react';
import NavMenuHeader from './NavMenuHeader';
import styles from './Header.module.css';
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_menu}>
      <Link to="/Home"><span className={styles.logo}>Mr Bean's store</span></Link>
        <NavMenuHeader />
      </div>
      <div className={styles.presentaion}></div>
    </header>
  );
}





