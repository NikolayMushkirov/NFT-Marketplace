import React from "react";

import Timer from "../Timer/Timer";

import shroomie from "../../assets/avatars/shroomie.svg";
import eye from "../../assets/icons/Eye.svg";
import styles from "./NFTHighlight.module.scss";

const NFTHighlight = () => {
  return (
    <section className={styles.NFTHighlight}>
      <div className={styles.container}>
        <div className={styles.infoBox}>
          <div className={styles.author}>
            <img className={styles.avatar} src={shroomie} alt="shroomie" />
            <p className={styles.name}>Shroomie</p>
          </div>
          <h2 className={styles.title}>Magic Mashrooms</h2>
          <div className={styles.button}>
            <img className={styles.buttonIcon} src={eye} alt="eye" />
            <span className={styles.buttonInfo}>See NFT</span>
          </div>
        </div>

        <Timer deadline="December, 31, 2023"/>
      </div>
    </section>
  );
};

export default NFTHighlight;
