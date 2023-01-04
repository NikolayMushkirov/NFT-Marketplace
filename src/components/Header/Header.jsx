import React from "react";

import logo from "../../assets/icons/Storefront.svg";
import user from "../../assets/icons/User.svg";
import styles from "./Header.module.scss";


const Header = () => {
  return (
    <>
      <header className={styles.navigation}>
        <a className={`${styles.logoBox} ${styles.link}`} href = {'/'}>
          <img className={styles.logo} src={logo} alt="logo" />
          <h1 className={styles.title}>NFT Marketplace</h1>
        </a>
        <div className={styles.links}>
          <a href="marketplace" className={styles.link}>Marketplace</a>
          <a href="rankings" className={styles.link}>Rankings</a>
          <a className={styles.link} href = {'connectwallet'}>Connect a wallet </a>
          <a className={`${styles.signUpBox} ${styles.link}`} href = {'createaccount'}>
            <img className={styles.userLogo} src={user} alt="user-logo" />
            <span className={styles.userText}>Sign Up</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
