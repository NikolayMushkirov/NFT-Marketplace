import React from "react";
import rocketIcon from "../../assets/icons/RocketLaunchDark.svg";
import CreatorCard from "../CreatorCard/CreatorCard";
import styles from "./TopCreators.module.scss";
const TopCreators = () => {
  return (
    <>
      <section className={styles.creators}>
        <div className={styles.container}>
          <div className={styles.titleBox}>
            <h3 className={styles.title}>Top creators</h3>
            <p className={styles.info}>
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <div className={styles.button}>
            <img className={styles.rocketIcon} src={rocketIcon} alt="rocket" />
            <span className={styles.buttonText}>View Rankings</span>
          </div>
        </div>

        <CreatorCard />
      </section>
    </>
  );
};

export default TopCreators;
