import React from "react";
import styles from "./HowItWorks.module.scss";
import cart from "../../assets/icons/howItWorks/cart.svg";
import folder from "../../assets/icons/howItWorks/folder.svg";
import wallet from "../../assets/icons/howItWorks/wallet.svg";
const HotItWorks = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>How it works</h3>
          <p className={styles.info}>Find out how to get started</p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={wallet} alt="wallet" className={styles.image} />
            <div className={styles.box}>
              <p className={styles.subTitle}>Setup Your wallet</p>
              <p className={styles.text}>
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={folder} alt="folder" className={styles.image} />
            <div className={styles.box}>
              <p className={styles.subTitle}>Create Collection</p>
              <p className={styles.text}>
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={cart} alt="cart" className={styles.image} />
            <div className={styles.box}>
              <p className={styles.subTitle}>Start Earning</p>
              <p className={styles.text}>
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotItWorks;
