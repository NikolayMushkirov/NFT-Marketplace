import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/icons/Storefront.svg";

import discordLogo from "../../assets/icons/socialMedia/DiscordLogo.svg";
import instagramLogo from "../../assets/icons/socialMedia/InstagramLogo.svg";
import twitterLogo from "../../assets/icons/socialMedia/TwitterLogo.svg";
import youtubeLogo from "../../assets/icons/socialMedia/YoutubeLogo.svg";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.marketPlace}>
              <div className={styles.logoBox}>
                <img className={styles.logo} src={logo} alt="logo" />
                <h2 className={styles.title}>NFT Marketplace</h2>
              </div>
              <div className={styles.socialMedia}>
                <p className={styles.text}>
                  NFT marketplace UI created with Anima for Figma.
                </p>
                <p className={styles.text}>Join our community</p>
                <div className={styles.iconsBox}>
                  <img
                    src={discordLogo}
                    alt="discordLogo"
                    className={styles.icon}
                  />
                  <img
                    src={youtubeLogo}
                    alt="youtubeLogo"
                    className={styles.icon}
                  />
                  <img
                    src={twitterLogo}
                    alt="twitterLogo"
                    className={styles.icon}
                  />
                  <img
                    src={instagramLogo}
                    alt="instagramLogo"
                    className={styles.icon}
                  />
                </div>
              </div>
            </div>

            <div className={styles.explore}>
              <h2 className={styles.title}>Explore</h2>
              <div className={styles.linksBox}>
                <a className={`${styles.link} , ${styles.text}`}>Marketplace</a>
                <a className={`${styles.link} , ${styles.text}`}>Rankings</a>
                <a className={`${styles.link} , ${styles.text}`}>
                  Connect a wallet
                </a>
              </div>
            </div>

            <div className={styles.subscription}>
              <h2 className={styles.title}>Join Our Weekly Digest</h2>
              <p className={styles.text}>
                Get exclusive promotions & updates straight to your inbox.
              </p>

              <form className={styles.subscribe}>
                <input
                  type="text"
                  className={styles.email}
                  placeholder="Enter your email here"
                />
                <div className={styles.button}>
                  <span className={styles.subText}>Subscribe</span>
                </div>
              </form>
            </div>
          </div>
          <p className={styles.copyright}>
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
