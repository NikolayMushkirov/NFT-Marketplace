import React from "react";
import { creatorsData } from "../../data/data";
import styles from "./CreatorCard.module.scss";
const CreatorCard = () => {
  return (
    <>
      <div className={styles.card}>
        {creatorsData.map((creator) => (
          <div key={creator.id} className={styles.container}>
            <img className={styles.avatar} src={creator.avatar} alt="avatar" />
            <div className={styles.box}>
              <p className={styles.name}>{creator.name}</p>
              <div className={styles.textBox}>
                <span className={styles.darkText}>Total sales: </span>
                <span className={styles.text}>{creator.totalSales} ETH </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CreatorCard;
