import React from "react";
import styles from "./NFTHighlight.module.scss";
import shroomie from "../../assets/avatars/shroomie.svg";
import eye from "../../assets/icons/Eye.svg";
import backgroundNFT from "../../assets/img/NFT Highlight.png";
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

        <div className={styles.timer}>
          <p className={styles.timerInfo}>Auction ends in:</p>
          <div className={styles.timerContainer}>
            <div className={styles.timerBox}>
              <span className={styles.unitOfTime}>59</span>
              <span className={styles.timerTitle}>Hours</span>
            </div>

            <div className={styles.timerBox}>
              <span className={styles.unitOfTime}>59</span>
              <span className={styles.timerTitle}>Minutes</span>
            </div>

            <div className={styles.timerBox}>
              <span className={styles.unitOfTime}>59</span>
              <span className={styles.timerTitle}>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTHighlight;
