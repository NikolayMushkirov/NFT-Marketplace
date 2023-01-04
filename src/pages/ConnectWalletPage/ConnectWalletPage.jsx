import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import placeholder from "../../assets/img/wallet.png";
import coinbase from "../../assets/icons/connectWallet/Coinbase.svg";
import metamask from "../../assets/icons/connectWallet/Metamask.svg";
import walletConnect from "../../assets/icons/connectWallet/WalletConnect.svg";

import styles from "./ConnectWallet.module.scss";

const ConnectWalletPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <img
          src={placeholder}
          alt="placeholder"
          className={styles.placeholder}
        />
        <div className={styles.box}>
          <div action="" className={styles.titleBox}>
            <h2 className={styles.title}>Connect Wallet</h2>
            <p className={styles.subTitle}>
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>
          </div>
          <div className={styles.paymentBox}>
            <div className={styles.payment}>
                <img src= {metamask} alt="metamask" className={styles.icon} />
                <span className={styles.name}>Metamask</span>
            </div>
            <div className={styles.payment}>
                <img src= {walletConnect} alt="walletConnect" className={styles.icon} />
                <span className={styles.name}>WalletConnect</span>
            </div>
            <div className={styles.payment}>
                <img src= {coinbase} alt="coinbase" className={styles.icon} />
                <span className={styles.name}>Coinbase</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ConnectWalletPage;
