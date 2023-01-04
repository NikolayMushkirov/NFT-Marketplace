import React from "react";
import rocketIcon from "../../assets/icons/RocketLaunch.svg";
import styles from "./HeroSection.module.scss";
import placeholder from "../../assets/img/Placeholder.png";
import artistAvatar from "../../assets/icons/Avatar.svg";
const HeroSection = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <h2 className={styles.title}>
              Discover Digital art & Collect NFTs
            </h2>
            <p className={styles.info}>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <div className={styles.button}>
              <img
                className={styles.rocketIcon}
                src={rocketIcon}
                alt="rocketIcon"
              />
              <span className={styles.buttonName}>Get Started</span>
            </div>
            <div className={styles.additionalInfoBox}>
              <span className={styles.additionalInfoAmount}>240k+</span>
              <span className={styles.additionalInfoAmount}>100k+</span>
              <span className={styles.additionalInfoAmount}>240k+</span>
              <span className={styles.additionalInfo}>Total Sale</span>
              <span className={styles.additionalInfo}>Auctions</span>
              <span className={styles.additionalInfo}>Artists</span>
            </div>
          </div>

          <div className={styles.nftImageBox}>
            <img
              className={styles.nftImage}
              src={placeholder}
              alt="placeholder"
            />
            <div className={styles.nftArtistBox}>
              <span className={styles.nftTitle}>Space Walking</span>
              <a className={styles.artistCard} href = {'artist'}>
                <img
                  className={styles.artistAvatar}
                  src={artistAvatar}
                  alt="avatar"
                />
                <span className={styles.artistName}>Animakid</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
