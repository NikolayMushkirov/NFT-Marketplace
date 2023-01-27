import React from "react";

import NFTCard from "../NFTCard/NFTCard";

import { cardsData } from "../../data/data";

import eye from "../../assets/icons/Eye.svg";

import styles from "./DiscoverNFT.module.scss";

const DiscoverNFT = () => {
  return (
    <>
      <section className={styles.DiscoverNFT}>
        <div className={styles.container}>
          <div className={styles.titleBox}>
            <h3 className={styles.title}>Discover More NFTs</h3>
            <p className={styles.info}>Explore new trending NFTs</p>
          </div>
          <div className={styles.button}>
            <img className={styles.rocketIcon} src={eye} alt="eye" />
            <span className={styles.buttonText}>See All</span>
          </div>
        </div>
        <NFTCard cardsData = {cardsData}/>
      </section>
    </>
  );
};

export default DiscoverNFT;
