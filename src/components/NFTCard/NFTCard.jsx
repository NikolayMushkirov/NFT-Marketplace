import React from "react";
import styles from "./NFTCard.module.scss";

import { AnimaKidCards } from "../../data/data";
const NFTCard = ({cardsData}) => {
  return (
    <div className={styles.NFTCard}>
      {cardsData.map((card) => (
        <div className={styles.container} key = {card.id}>
          <img className={styles.img} src={card.img} alt={card.name} />
          <div className={styles.wrapper}>
            <div className={styles.titleBox}>
              <p className={styles.name}>{card.name}</p>

              <div className={styles.authorBox}>
                <img
                  className={styles.authorAvatar}
                  src={card.authorAvatar}
                  alt={card.authorName}
                />
                <p className={styles.authorName}>{card.authorName}</p>
              </div>
            </div>

            <div className={styles.priceBox}>
              <p className={styles.priceTitle}>Price</p>
              <p className={styles.price}>{card.price} ETH</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
