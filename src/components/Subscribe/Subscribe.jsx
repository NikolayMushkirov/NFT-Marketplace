import React from "react";
import subIcon from "../../assets/icons/EnvelopeSimple.svg";
import subPhoto from "../../assets/img/Photo.png";
import styles from "./Subscribe.module.scss";

const Subscribe = () => {
  return (
    <>
      <section className={styles.subscribe}>
        <div className={styles.container}>
          <img src={subPhoto} alt="subPhoto" className={styles.subPhoto} />
          <div className={styles.wrapper}>
            <div className={styles.infoBox}>
              <div className={styles.title}>Join Our Weekly <br/> Digest</div>
              <div className={styles.info}>
                Get Exclusive Promotions & Updates Straight To Your Inbox.
              </div>
            </div>

            <form className={styles.subscribeForm}>
              <input
                type="text"
                className={styles.email}
                placeholder="Enter your email here"
              />
              <div className={styles.button}>
                <img src={subIcon} alt="icon" className={styles.subIcon} />
                <span className={styles.subText}>Subscribe</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
